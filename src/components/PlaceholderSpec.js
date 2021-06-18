import React from 'react'
import '../styles/coin.css'
import { MdClear } from "react-icons/md";

const PlaceholderSpec = () => {
    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <span className="bookmark" >
                        <MdClear size={20} color={"#1a1a1c"} />
                    </span>
                    <div className="coin">
                        <h1>Curency name</h1>
                        <p className="coin-symbol">Symbol</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">Price</p>
                        <p className="amount">Amount</p>
                        <p className="coin-volume">Invested</p>
                        <p>Profit in 24h</p>
                        <p className="coin-marketcap">
                            Profit
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceholderSpec
