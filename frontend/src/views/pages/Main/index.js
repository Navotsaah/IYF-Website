import React from 'react';
import seminar from '../../../assets/images/seminar2.jpg';
import devotee from '../../../assets/images/main_img3.JPG';
import feature3 from '../../../assets/images/main_img2.jpg';
import feature2 from '../../../assets/images/main_img1.JPG';
import '../../../assets/css/main.css';

function Header() {
    return (
        <div className="main">
            <div className='header'>
                <div className="img_header">
                    <img src={seminar} alt="Seminar" />
                    <div className="header_content">
                        <div className='header_heading'>Empowering youth to find their path</div>
                        <p className='header_subheading'>Discover your passion, overcome doubts, and achieve success with our personalized guidance.</p>
                        <div className="header_btn">
                            <button className="header_start">Start</button>
                            <button className="header_learn">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='feature'>
                <div className="feature-heading">
                    Discover the Path to Spiritual Enlightenment
                </div>
                <div className="feature-container">
                    {/* Feature item 1 */}
                    <div className="feature-item">
                        <img src={devotee} alt='Devotees' className="feature-img" />
                        <div className="feature-text">
                            <p className='feature-text-subheading'>Connect with Like-minded Individuals</p>
                            <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                        </div>
                        <button className="feature-learn">Learn more</button>
                    </div>
                    {/* Feature item 2 */}
                    <div className="feature-item">
                        <img src={feature2} alt='Feature 2' className="feature-img" />
                        <div className="feature-text">
                            <p className='feature-text-subheading'>Connect with Like-minded Individuals</p>
                            <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                        </div>
                        <button className="feature-learn">Learn more</button>
                    </div>
                    {/* Feature item 3 */}
                    <div className="feature-item">
                        <img src={feature3} alt='Feature 3' className="feature-img" />
                        <div className="feature-text">
                            <p className='feature-text-subheading'>Connect with Like-minded Individuals</p>
                            <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                        </div>
                        <button className="feature-learn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
