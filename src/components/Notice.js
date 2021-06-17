import React from 'react'
import '../styles/Notice.css'

const Notice = ({ text }) => {
    return (
        <div className="cont">
            <div className="cont-inner">
                <span>{text}</span>
            </div>
        </div>
    )
}

export default Notice
