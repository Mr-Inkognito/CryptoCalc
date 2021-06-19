import React, { useState } from 'react'
import '../styles/Dropdown.css'
import curfile from '../JSON/cur.json'
import axios from 'axios';
let obj;

const Dropdown = ({ setCur, coins }) => {
    const [click, setclick] = useState(false);
    const clickHandler = () => setclick(!click);

    return (
        <ul onClick={clickHandler} className={click ? "dropdown dropClicked" : "dropdown"}>
            {curfile.map((item) => {
                return (
                    <li key={item.id} onClick={() => {
                        obj = { "id": item.id, "name": item.name };
                        localStorage.setItem("cur", JSON.stringify(obj));
                        setCur(item.id); axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${item.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                            .then(res => {
                                coins(res.data);
                            }).catch(err => {
                                console.log(err);
                                alert('Error with loading API, please contact administrator.');
                            });
                    }}>
                        {item.id}
                    </li>
                );
            })}
        </ul>
    )
}

export default Dropdown
