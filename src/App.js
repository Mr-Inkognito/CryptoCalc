import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import './App.css';
import { AiOutlineStock } from "react-icons/ai";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
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
          <div className="investMark" onClick={investmode}>

            {(() => {
              if (invested === true) {
                return (
                  <AiOutlineStock size={50} color={"green"} />
                )
              } else {
                return (
                  <AiOutlineStock size={50} color={"white"} />
                )
              }
            })()}
          </div>
          <form>
            <input type="text" placeholder="Search" className="search-input" onChange={changeHandler} />
          </form>
        </div>
      </div>


      {(() => {
        if (invested === true) {
          return (
            <CoinListInvested search={search} coins={coins} cur={cur} />
          )
        }
        else if (book === true) {
            if(localStorage.getItem("book")=== null){
              return(
                <Notice text={"There are no favourites chosen"}/>
              )
            }
            else{
              return(
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
