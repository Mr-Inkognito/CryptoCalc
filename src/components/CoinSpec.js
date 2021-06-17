import React, { useState } from 'react'
import { MdClear } from "react-icons/md";
import curmap from '../JSON/cur.json'
import '../styles/coin.css'
let currency;
let str;
let substr;

const CoinSpec = ({ icon, coinName, symbol, price, priceChange24, profit, cur, id, del  }) => {

    for (let i = 0; i < curmap.length; i++) {
        if (curmap[i].id === cur) {
            currency = curmap[i].name.toLocaleString();
        }
    }

    str = localStorage.getItem(id);
    substr = str.split("|")

    const [invested, setinvested] = useState(substr[0])



    return (
        <div className="coin-container">
            <div className="coin-row">
                <span className="bookmark" onClick={()=>del(id)}>
                <MdClear size={20} color={"red"} />
                </span>
                <div className="coin">
                    <img src={icon} alt="icon" />
                    <h1>{coinName}</h1>
                    <p className="coin-symbol">{symbol.toLocaleString().toUpperCase()}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">{currency}{price}</p>
                    <p className="coin-invested">{currency}{invested.toLocaleString()}</p>
                    {priceChange24 < 0 ? (
                        <p className="coin-perc-red">{priceChange24.toFixed(2)}%</p>
                    ) : (
                        <p className="coin-perc-green">{priceChange24.toFixed(2)}%</p>
                    )}
                    <p className="coin-profit">
                        {currency}{profit.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CoinSpec
