import React, { useState } from 'react'
import '../App.css';
import { SiBitcoin } from "react-icons/si";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import '../styles/Navbar.css'
import Dropdown from './Dropdown';



const NavBar = (props) => {

    const [dropdown, setdropdown] = useState(false)

    const mouseEnter = () => setdropdown(true);
    const mouseLeave = () => setdropdown(false);

    return (
        <div className="navbar">
            <div className="logo" onClick={props.home}>
                <SiBitcoin />
                <span>CryptoCalc</span>
            </div>
            <div className="buttonArea">
                <div className={props.book ? "Bookmark btn clicked" : "Bookmark btn"} onClick={props.bookmode}>
                    {(() => {
                        if (props.book === true) {
                            return (
                                <IoMdHeart color={"red"} />
                            )
                        } else {
                            return (
                                <IoMdHeartEmpty color={"red"} />
                            )
                        }
                    })()}
                    <span>Favourites</span>
                </div>
                <div className={props.invested ? "investMark btn clicked" : "investMark btn"} onClick={props.investmode}>

                    {(() => {
                        if (props.invested === true) {
                            return (
                                <AiOutlineStock color={"green"} />
                            )
                        } else {
                            return (
                                <AiOutlineStock color={"white"} />
                            )
                        }
                    })()}
                    <span>Calculation</span>
                </div>
                <div className="currency" onMouseLeave={mouseLeave}>
                    <span className="btnCur" onMouseEnter={mouseEnter}>
                        <span>Change currency</span>
                        &nbsp;<BsChevronDown />
                    </span>
                    {dropdown && <Dropdown setCur={props.setCur} coins={props.coins} />}
                </div>
            </div>
            <div className="search">
                <input type="text" placeholder="Search" className="search-input" onChange={props.changeHandler} />
            </div>
        </div>
    )
}

export default NavBar
