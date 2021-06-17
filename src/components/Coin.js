import React, { useState } from 'react'
import '../styles/coin.css'
import curmap from '../JSON/cur.json'
import { AiOutlineStock } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import Popup from './Popup';
let currency;
let str = "";


const Coin = ({ icon, coinName, symbol, price, volume, priceChange24, marketcap, cur, id, del }) => {

    for (let i = 0; i < curmap.length; i++) {
        if (curmap[i].id === cur) {
            currency = curmap[i].name.toLocaleString();
        }
    }


    const [bookmark, setbookmark] = useState(() => {
        if (localStorage.getItem("book") != null && localStorage.getItem("book").includes(id)) {
            return true;
        }
        else {
            return false;
        }
    });

    const [closePopup, setclosePopup] = useState(false)
    const [iconColor, seticonColor] = useState(() => {
        if (localStorage.getItem(id) !== null) {
            return "green";
        }
        else {
            return "white";
        }
    })
    const [investedValue, setinvestedValue] = useState(null)


    function addBookmark() {
        if (bookmark) {
            setbookmark(false)
            if (del != null) {
                del(id);
            }
            str = localStorage.getItem("book");
            str = str.replace(`"${id}" `, "");
            if (str.length <= 0) {
                localStorage.removeItem("book");
            }
            else {
                localStorage.setItem("book", str);
            }

        }
        else {
            setbookmark(true);
            str = str + `"${id}" `
            localStorage.setItem("book", str);
        }
    }


    function setInvest(value) {
        setinvestedValue(value.target.value);
    }

    return (
        <div className="coin-container">
            <div className="coin-row">
                <span className="bookmark" onClick={addBookmark}  >
                    {(() => {
                        if (bookmark === true) {
                            return (
                                <IoMdHeart size={20} color={"red"} />
                            )
                        } else {
                            return (
                                <IoMdHeartEmpty size={20} />
                            )
                        }
                    })()}

                </span>
                <div className="coin">
                    <img src={icon} alt="icon" />
                    <h1>{coinName}</h1>
                    <p className="coin-symbol">{symbol.toLocaleString().toUpperCase()}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{currency}{price}</p>
                    <p className="coin-volume">{currency}{volume.toLocaleString()}</p>
                    {priceChange24 < 0 ? (
                        <p className="coin-perc-red">{priceChange24.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-perc-green">{priceChange24.toFixed(2)}%</p>
                    )}
                    <p className="coin-marketcap">
                        {currency}{marketcap.toLocaleString()}
                    </p>
                    <span className="calc" onClick={() => setclosePopup(true)}>
                        <AiOutlineStock size={50} color={iconColor} />
                    </span>
                </div>

                <Popup open={closePopup} setOpen={setclosePopup} setInvest={setInvest} setCloseColor={seticonColor}>
                    <span className="okbtn" onClick={() => {
                        localStorage.setItem(id, `${investedValue}|${cur}`);
                        seticonColor("green");
                        setclosePopup(false)
                    }}>OK</span>
                </Popup>

            </div>
        </div>
    )
}

export default Coin
