import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../assets/images/carousel.1.jpg';
import carousel2 from '../../../assets/images/carousel.2.jpg';
import carousel3 from '../../../assets/images/carousel.3.jpg';
import '../../../assets/css/carousel.css'; // Import custom CSS for carousel

function App() {
    return (
        <div className="container carousel_container">
            <h2 className="text-center mb-4">Session glance</h2>
            <div className="row">
                <div className="col-lg-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel1}
                                alt="Los Angeles"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel2}
                                alt="Chicago"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel3}
                                alt="New York"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-lg-6 d-flex align-items-center carousel_text_container">
                    <div className="carousel-text-container">
                        <h3 className="text-center mb-4">Welcome to <p className='navotsav_p'>Navotsav </p> by IYF</h3>
                        <p className="text-left">
                            The Iskcon Youth Center has been a transformative experience for me. It has provided me with the guidance and support I needed to embark on my spiritual journey. I am forever grateful for the wisdom and teachings I have received.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
