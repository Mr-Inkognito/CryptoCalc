import React from 'react'
import '../styles/coin.css'

const PlaceholderSpec = () => {
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
