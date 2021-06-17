import React from 'react'
import '../styles/coin.css'
import { IoMdHeart } from "react-icons/io";

const placeholder = () => {
    return (
        <div>
            <div className="coin-container">
                <div className="coin-row">
                    <span className="bookmark" >
                        <IoMdHeart size={20} color={"#1a1a1c"} />
                    </span>
                    <div className="coin">
                        <h1>Curency name</h1>
                        <p className="coin-symbol">Symbol</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">Price</p>
                        <p className="coin-volume">24h Volume</p>
                        <p>Growth in 24h</p>
                        <p className="coin-marketcap">
                            Market cap
                        </p>
                        <span className="calc">
                            Calculate
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default placeholder
