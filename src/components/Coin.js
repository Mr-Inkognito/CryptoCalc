import React, { useState } from 'react'
import '../styles/coin.css'
import curmap from '../JSON/cur.json'
import { AiOutlineStock } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
let currency;


const Coin = ({ icon, coinName, symbol, price, volume, priceChange24, marketcap, cur, id }) => {

    for (let i = 0; i < curmap.length; i++) {
        if (curmap[i].id === cur) {
            currency = curmap[i].name.toLocaleString();
        }
    }


    const [bookmark, setbookmark] = useState(() => {
        if (localStorage.getItem(id) == null) {
            return false;
        }
        else {
            return true;
        }
    });


    function addBookmark() {
        if (bookmark) {
            setbookmark(false)
            localStorage.removeItem(id);
        }
        else {
            setbookmark(true);
            localStorage.setItem(id, true);
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
                </div>
                <span className="calc" >
                    <AiOutlineStock size={50} />
                    <p>Calculate</p>
                </span>

            </div>
        </div>
    )
}

export default Coin
