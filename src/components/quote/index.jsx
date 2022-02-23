import React from 'react'
import './style.scss'

export default function Quote( { quote}) {
    return (
        <div className='quote'>
            <div className="bar"></div>
            <div className="quote-text">
                "{quote}"
            </div>
        </div>
    )
}
