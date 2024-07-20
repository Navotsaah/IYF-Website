import React from 'react'
import seminar from '../assets/seminar2.jpg'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="img_header">
                <img src={seminar} alt="" />
            </div>
            <div className="header_content">
            <h1>Empowering youth to find their path</h1>
            <p>Discover your passion overcome doubts and achieved success with our personalised guidance.</p>
            <button>Start</button>
            </div>
        </div>
    )
}

export default Header
