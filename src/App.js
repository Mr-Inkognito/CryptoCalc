import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import CoinListAll from './components/CoinListAll';
import CoinListBook from './components/CoinListBook';
import CoinListInvested from './components/CoinListInvested';
import Notice from './components/Notice';
let curr;

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [cur, setcur] = useState(()=>{
    curr = localStorage.getItem("curr");
    if(curr){
      return curr.id;
    }
    else{
      return "usd";
    }
  })
  const [book, setbook] = useState(false);
  const [invested, setinvested] = useState(false);



  const changeHandler = e => {
    setSearch(e.target.value)
  }

  function bookmode() {
    if (!invested) {
      setbook(!book);
    }
    else {
      setinvested(!invested);
      setbook(!book);
    }
  }

  function investmode() {
    if (!book) {
      setinvested(!invested);
    }
    else {
      setinvested(!invested);
      setbook(!book);
    }
  }

  function home() {
    setbook(false);
    setinvested(false);
  }

  function setCurrency(id) {
    setcur(id);
  }


  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoins(res.data);
      }).catch(err => {
        console.log(err);
        alert('Error with loading API, please contact administrator.');
      });
  }, []);


  return (
    <div className="container">
      <nav className="navbar">
        <NavBar
          book={book}
          bookmode={bookmode}
          invested={invested}
          investmode={investmode}
          changeHandler={changeHandler}
          home={home}
          setCur={setCurrency}
          coins={setCoins}
        />
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
