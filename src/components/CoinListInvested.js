import React, { useState } from 'react'
import PlaceholderSpec from './PlaceholderSpec';
import CoinSpec from './CoinSpec';


const CoinListInvested = ({ search, coins, cur }) => {

    const [filter, setfilter] = useState(coins)

    const del = (id) => {
        setfilter(coins.filter((coin)=> coin.id != id))
        localStorage.removeItem(id);
    }

    const coinFilter = filter.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )




    return (
        <div>
        <PlaceholderSpec />
        {
            coinFilter.map(coin => {
                return (localStorage.getItem(coin.id)!=null) ? (
                    <div>
                        <CoinSpec
                            key={coin.id}
                            coinName={coin.name}
                            icon={coin.image}
                            symbol={coin.symbol}
                            price={coin.current_price}
                            priceChange24={20}
                            profit={20}
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

export default CoinListInvested
