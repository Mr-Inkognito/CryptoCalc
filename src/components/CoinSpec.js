import React, { useState } from 'react'
import { MdClear } from "react-icons/md";
import curmap from '../JSON/cur.json'
import '../styles/coin.css'
let currency;
let coin;

const CoinSpec = ({ icon, coinName, symbol, price, cur, id, del }) => {

    for (let i = 0; i < curmap.length; i++) {
        if (curmap[i].id === cur) {
            currency = curmap[i].name.toLocaleString();
        }
    }

    function getOBJ() {
        let obj = JSON.parse(localStorage.getItem("curCalc"));
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].id === id) {
                return obj[i];
            }
        }
    }

    coin = getOBJ();


    const [invested, setinvested] = useState(coin.invested)
    const [oldValue, setoldValue] = useState(coin.price)

    return (
        <div className="coin-container">
            <div className="coin-row">
                <span className="bookmark" onClick={() => del(id)}>
                    <MdClear size={20} color={"red"} />
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
                    {(() => {
                        if (oldValue > 0 && invested > 0) {
                            console.log(oldValue);
                            return (
                                <p className="amount">{(invested / oldValue).toFixed(5).toLocaleString()}</p>
                            )
                        } else {
                            return (
                                <p className="amount">Error</p>
                            )
                        }
                    })()}
                    <p className="coin-invested">{currency}{invested.toLocaleString()}</p>
                    <p className="coin-profit">{currency}{(price * (invested / oldValue)).toFixed(2).toLocaleString()}</p>
                    {((price * (invested / oldValue)) - invested) > 0 ? (
                        <p className="coin-perc-green">
                            {currency}{((price * (invested / oldValue)) - invested).toFixed(2).toLocaleString()}
                        </p>
                    ) : (
                        <p className="coin-perc-red">
                            {currency}{((price * (invested / oldValue)) - invested).toFixed(2).toLocaleString()}
                        </p>
                    )
                    }

                </div>
            </div>
        </div>
    )
}

export default CoinSpec
