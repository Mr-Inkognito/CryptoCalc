import React, { useState } from 'react'
import Placeholder from './Placeholder';
import Coin from './Coin';


const CoinListBook = ({ search, coins, cur }) => {

    const [filter, setfilter] = useState(coins)

    const del = (id) => {
        setfilter(coins.filter((coin)=> coin.id !== id))
    }

    const coinFilter = filter.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div>
            <Placeholder />
            {
                coinFilter.map(coin => {
                    return (localStorage.getItem("book")!==null && localStorage.getItem("book").includes(coin.id) ) ? (
                        <div>
                            <Coin
                                key={coin.id}
                                coinName={coin.name}
                                icon={coin.image}
                                symbol={coin.symbol}
                                volume={coin.total_volume}
                                price={coin.current_price}
                                priceChange24={coin.price_change_percentage_24h}
                                marketcap={coin.market_cap}
                                cur={cur}
                                id={coin.id}
                                del={del}
                            />
                        </div>
                    ) : ("");
                })}
        </div>
    )
}

export default CoinListBook
