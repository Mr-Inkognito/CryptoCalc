import React from 'react'
import '../styles/coin.css'

const placeholder = () => {
    return (
        <div>
            <div className="coin-container">
            <div className="coin-row">
                
                <div className="coin">
                    <h1>Curency name</h1>
                    <p className="coin-symbol">Curency symbol</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Price</p>
                    <p className="coin-volume">24h Volume</p>
                    <p>Growth in 24h</p>
                    <p className="coin-marketcap">
                        Market cap
                    </p>
                </div>
                <span className="calc">
                    Calculate
                </span>
            </div>
        </div>
        </div>
    )
}

export default placeholder
