import React, { useState } from 'react'
import PlaceholderSpec from './PlaceholderSpec';
import CoinSpec from './CoinSpec';

let obj;
let rObj;

const CoinListInvested = ({ search, coins, cur }) => {

    const [filter, setfilter] = useState(coins)

    const del = (id) => {
        setfilter(coins.filter((coin) => coin.id !== id))
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].id === id) {
                rObj = obj.filter(f => (
                    f.id !== id
                ))
                if (rObj.length === 0) {
                    localStorage.removeItem("curCalc");
                }
                else {
                    localStorage.setItem("curCalc", JSON.stringify(rObj));
                }
            }
        }
    }

    const coinFilter = filter.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    )

    function getindex(id) {
        obj = JSON.parse(localStorage.getItem("curCalc"));
        if (obj == null) {
            return false;
        }
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].id === id) {
                return true;
            }
        }
        return false;
    }


    return (
        <div>
            <PlaceholderSpec />
            {
                coinFilter.map(coin => {
                    return (getindex(coin.id)) ? (
                        <div>
                            <CoinSpec
                                key={coin.id}
                                coinName={coin.name}
                                icon={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
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
