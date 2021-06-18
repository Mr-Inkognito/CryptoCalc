import React from 'react'
import '../App.css';
import { SiBitcoin } from "react-icons/si";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineStock } from "react-icons/ai";
import '../styles/Navbar.css'

const NavBar = (props) => {
    return (
        <div className="navbar">
            <div className="logo">
                <SiBitcoin />
                <span>CryptoCalc</span>
            </div>
            <div className="Bookmarks" onClick={props.bookmode}>
                {(() => {
                    if (props.book === true) {
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
            <div className="investMark" onClick={props.investmode}>

                {(() => {
                    if (props.invested === true) {
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
            <div className="search">
                <input type="text" placeholder="Search" className="search-input" onChange={props.changeHandler} />
            </div>
        </div>
    )
}

export default NavBar
