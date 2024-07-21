import React from 'react';
import iskon_img from '../assets/logo_iyf.png';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <img src={iskon_img} className='iyf_logo' alt="" />
            <nav>
                <ul>
                    <li><a href="#discover">Discover</a></li>
                    <li><a href="#event">Event</a></li>
                    <li><a href="#resources">Resources</a></li>
                    <li><a href="#community"><select name="commuity" id=""><option value="Community">Community</option></select></a></li>
                    <li id='join'><a href="#join">Join</a></li>
                    <li id='donation_li'><a href="#donate" id='donate'>Donate</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
