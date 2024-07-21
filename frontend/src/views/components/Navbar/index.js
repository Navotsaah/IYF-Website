import React, { useState, useEffect, useRef } from 'react';
import iskon_img from '../../../assets/images/navotsah.png';
import Hamburger from 'hamburger-react';
import '../../../assets/css/navbar.css';

function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const navMenuRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const handleToggle = () => {
        setOpen(!isOpen); // Toggle the state of isOpen
    };

    const handleLinkClick = () => {
        setOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div className='navbar'>
            <div className='logo-and-hamburger'>
                <img src={iskon_img} className='iyf_logo' alt="IYF Logo" />

                {/* Hamburger icon for mobile */}
                <div className='hamburger-menu' onClick={handleToggle}>
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>

            {/* Navigation links */}
            <nav ref={navMenuRef} className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                <ul className='navbar-links'>
                    <li><a href="#discover" onClick={handleLinkClick}>Discover</a></li>
                    <li><a href="#event" onClick={handleLinkClick}>Event</a></li>
                    <li><a href="#resources" onClick={handleLinkClick}>Resources</a></li>
                    <li><a href="#community" onClick={handleLinkClick}>
                        <select name="community">
                            <option value="Community">Community</option>
                        </select>
                    </a></li>
                    <li id='join'><a href="#join" onClick={handleLinkClick}>Join</a></li>
                    <li id='donation_li'><a href="#donate" id='donate' onClick={handleLinkClick}>Donate</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
