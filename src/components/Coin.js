import React, { useState } from 'react'
import '../styles/coin.css'
import curmap from '../JSON/cur.json'
import { AiOutlineStock } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCheck } from "react-icons/bs";
import { IoMdHeart } from "react-icons/io";
import Popup from './Popup';
import '../styles/popup.css'

let parser;
let currency;
let str = "";
let obj = {};
let array = [];

const Coin = ({ icon, coinName, symbol, price, volume, priceChange24, marketcap, cur, id, del }) => {


    parser = JSON.parse(localStorage.getItem("cur"));
    currency = parser.name;


    const [bookmark, setbookmark] = useState(() => {
        if (localStorage.getItem("book") !== null && localStorage.getItem("book").includes(id)) {
            return true;
        }
        else {
            return false;
        }
    });

    const [closePopup, setclosePopup] = useState(false)
    const [iconColor, seticonColor] = useState(() => {
        if (localStorage.getItem("curCalc") !== null && localStorage.getItem("curCalc").includes(id)) {
            return "green";
        }
        else {
            return "white";
        }
    })
    const [investedValue, setinvestedValue] = useState(null)
    const [inputColor, setInputColor] = useState({ borderColor: "white" })




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
        if (value.target.validity.valid) {
            setinvestedValue(value.target.value);
        }
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
                    <span className="coinName">
                        <img src={icon} alt="icon" />
                        <h1>{coinName}</h1>
                    </span>
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

                <Popup open={closePopup} setOpen={setclosePopup} setInvest={setInvest} setCloseColor={seticonColor} title={coinName} color={setInputColor} style={inputColor}>
                    <span className="button" onClick={() => {
                        if (investedValue) {
                            obj = { "id": id, "invested": investedValue, "cur": cur, "price": price }
                            array.unshift(obj)
                            localStorage.setItem("curCalc", JSON.stringify(array));
                            seticonColor("green");
                            setInputColor({ borderColor: "white" })
                            setclosePopup(false)
                        }
                        else {
                            setInputColor({ border: "3px solid red" })
                        }

                    }}><BsCheck size={25} /></span>
                </Popup>

            </div>
        </div>
    )
}

export default Coin
