import React from 'react'
import '../styles/popup.css'
import { BsX } from "react-icons/bs";

const Popup = (props) => {
    return (props.open) ? (
        <div className="popup">
            <div className="popup-inner">
                <form className="form">
                    <label htmlFor="input" className="label">Insert value for {props.title}:</label>
                    <input id="input" pattern="[0-9]*" className="input" type="text" placeholder="Input value"
                        onChange={props.setInvest} style={props.style} />

                    <div className="buttons">
                        <span className="button" onClick={() => {
                            props.setOpen(false);
                            props.color({ borderColor: "white" });
                        }}>
                            <BsX size={25} />
                        </span>
                        {props.children}
                    </div>

                </form>
            </div>
        </div>
    ) : ("")
}

export default Popup
