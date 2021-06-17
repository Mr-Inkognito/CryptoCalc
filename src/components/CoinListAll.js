import React, { useState } from 'react'
import Placeholder from './Placeholder';
import Coin from './Coin';

const CoinListAll = ({ search, coins, cur }) => {



    const coinFilter = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )



    return (
        <div>
            <Placeholder />
            {
                coinFilter.map(coin => {
                    return (
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
                            />
                        </div>
                    );
                })}
        </div>
    )
}

export default CoinListAll
