import React from 'react'
import seminar from '../../../assets/images/seminar2.jpg'
import '../../../assets/css/main.css'

function Header() {
    return (
        <div className='header'>
            <div className="img_header">
                <img src={seminar} alt="" />
            </div>
            <div className="header_content">
                <div className='header_heading'>Empowering youth to find their path</div>
                <p className='header_subheading'>Discover your passion overcome doubts and achieved success with our personalised guidance.</p>
                <div className="header_btn">
                    <button className="header_start">Start</button>
                    <button className="header_learn">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Header
