import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './components/Coin';
import NavBar from './components/NavBar';
import './App.css';
import Placeholder from './components/Placeholder';
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";


function App() {


  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [cur, setcur] = useState("usd")
  const [book, setbook] = useState(false)

  const changeHandler = e => {
    setSearch(e.target.value)
  }

  const coinFilter = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  function bookmode() {
    if (book) {
      setbook(false);
    }
    else {
      setbook(true);
    }
  }



  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoins(res.data);
      }).catch(err => {
        console.log(err);
        alert('Error');
      });
  }, []);


  return (
    <div className="container">
      <div className="nav">
        <NavBar />
        <div className="search">
          <div className="curSwitch">
            <select
              className="curChange"
              onChange={(e) => {
                const selected = e.target.value;
                setcur(selected);
                axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                  .then(res => {
                    setCoins(res.data);
                  })

              }}
            >
              <option value="usd">USD</option>
              <option value="czk">CZK</option>
            </select>
          </div>
          <div className="Bookmarks" onClick={bookmode}>

            {(() => {
              if (book === true) {
                return (
                  <IoMdHeart size={50} color={"red"} />
                )
              } else {
                return (
                  <IoMdHeartEmpty size={50} color={"red"} />
                )
              }
            })()}
          </div>
          <form>
            <input type="text" placeholder="Search" className="search-input" onChange={changeHandler} />
          </form>
        </div>
      </div>


      <div className="invest">
        <div className="invData">

        </div>
      </div>

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
  );
}


export default App;
