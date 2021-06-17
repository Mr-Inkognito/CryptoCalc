import React from 'react'

const Popup = (props) => {
    return (props.open) ? (
        <div className="popup">
            <div className="popup-inner">
                <form>
                    <input type="text" placeholder="Input value" onChange={props.setInvest}/>
                    <button onClick={() => props.setOpen(false)}>close</button>
                    {props.children}
                </form>

            </div>
        </div>
    ) : ("")
}

export default Popup
