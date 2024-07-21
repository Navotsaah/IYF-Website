import React from 'react';
import './Feature.css'; // Import the CSS file
import devotee from '../assets/devotees group 1.png'; // Adjusted the image import path
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'

function Feature() {
    return (
        <div className='feature'>
            <div className="feature-heading">
                Discover the Path to Spiritual Enlightenment
            </div>
            <div className="feature-container">
                {/* Feature item 1 */}
                <div className="feature-item">
                    <img src={devotee} alt='devotees_group' className="feature-img" />
                    <div className="feature-text">
                        <p>Connect with Like-minded Individuals</p>
                        <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                    </div>
                    <button className="feature-learn">Learn more</button>
                </div>
                {/* Feature item 2 */}
                <div className="feature-item">
                    <img src={feature2} alt='devotees_group' className="feature-img" />
                    <div className="feature-text">
                        <p>Connect with Like-minded Individuals</p>
                        <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                    </div>
                    <button className="feature-learn">Learn more</button>
                </div>
                {/* Feature item 3 */}
                <div className="feature-item">
                    <img src={feature3} alt='devotees_group' className="feature-img" />
                    <div className="feature-text">
                        <p>Connect with Like-minded Individuals</p>
                        <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                    </div>
                    <button className="feature-learn">Learn more</button>
                </div>
            </div>
        </div>
    );
}

export default Feature;
