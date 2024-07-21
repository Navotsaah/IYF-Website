import React from 'react'
import './feature.css'
import devotee from '../assets/devotees group 1.png'

function Feature() {
    return (
        <div className='feature_class'>
            <div className="feature_heading">
                Discover the Path to Spiritual Enlightenment
            </div>
            <div className="feature_div">
                <div className="feature_img">
                    <img src={devotee} alt='devotees_group' />
                </div>
                <div className="feature_text1">
                    <p>Connect with Like-minded Individuals</p>
                </div>
                <div className="feature_text2">
                    <p>Explore a range of spiritual resources and teachings to enhance your journey.</p>
                </div>
                <button className="feature_learn">Learn more </button>
            </div>
        </div>
    )
}

export default Feature
