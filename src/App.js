import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import CoinListAll from './components/CoinListAll';
import CoinListBook from './components/CoinListBook';
import CoinListInvested from './components/CoinListInvested';
import Notice from './components/Notice';


function App() {


  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')
  const [cur, setcur] = useState("usd")
  const [book, setbook] = useState(false)
  const [invested, setinvested] = useState(false)


  const changeHandler = e => {
    setSearch(e.target.value)
  }



  function bookmode() {
    if (book) {
      setbook(false);
    }
    else {
      setbook(true);
    }
  }

  function investmode() {
    if (invested) {
      setinvested(false);
    }
    else {
      setinvested(true);
    }
  }



  useEffect(() => {
    console.log(cur);
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
      <nav className="navbar">
        <NavBar book={book} bookmode={bookmode} invested={invested} investmode={investmode} changeHandler={changeHandler}/>
      </nav>


      {(() => {
        if (invested === true) {
          if (localStorage.getItem("curCalc") === null) {
            return (
              <Notice text={"There are no calculations chosen"} />
            )
          }
          else {
            return (
              <CoinListInvested search={search} coins={coins} cur={cur} />
            )
          }
        }
        else if (book === true) {
          if (localStorage.getItem("book") === null) {
            return (
              <Notice text={"There are no favourites chosen"} />
            )
          }
          else {
            return (
              <CoinListBook search={search} coins={coins} cur={cur} />
            )
          }
        }
        else {
          return (
            <CoinListAll search={search} coins={coins} cur={cur} />

          )
        }
      })()}

    </div>
  );
}


export default App;
