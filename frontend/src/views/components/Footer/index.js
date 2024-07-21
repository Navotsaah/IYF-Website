import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/css/footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iskon_img from '../../../assets/images/logo_iyf.png';
import { faMapMarkerAlt, faPhone, faFax, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="text-center footer-section">
                        <div className="footer-main contact-info">
                            <div style={{ textAlign: "center" }}>
                                <img src={iskon_img} alt="footer-main" />
                            </div>
                            <h4 >What we Do ?</h4>
                            <p>Our Philosphy of life is called Dharma. Wait ! Let us explain? Dharma  doesn’t mean any specific sect or Community, but It actually means the ETERNAL NATURE.</p>
                            <hr />
                            <p>For Example - Sugar is Eternally Sweet, Chilli is eternally Hot/Spicy. So that is their Dharma.</p>
                            <hr />
                            <p>Similarly We as SPIRITUAL BEINGS have Eternal Nature of being Happy. (Now You Know Why everyone is looking for Happiness. Unfortunately Almost 99% of the times they fall into wrong definition of Happiness.)</p>
                            <hr />
                            <p>But We know How to Happy ! By Connecting with God, and Who is he ? How to Connect with him ? That is answered in detail in our courses.</p>


                        </div>
                    </Col>
                    <Col md={4} className="text-center footer-section">
                        <div className="contact-info">
                            <h5>Contact Info</h5>
                            <hr />
                            <Row style={{ alignItems: "center" }}> <Col md={1}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </Col>
                                <Col ><p>2221, Sector 38C, Sector 38, Chandigarh, 160038</p>
                                </Col>

                            </Row>
                            <hr />
                            <Row style={{ alignItems: "center" }}>
                                <Col md={1}>
                                    <p><FontAwesomeIcon icon={faPhone} /> </p>
                                </Col>
                                <Col ><p>Phone: 8604599036</p>
                                </Col>

                            </Row>
                            <hr />
                            <Row style={{ alignItems: "center" }}> <Col md={1}>
                                <p><FontAwesomeIcon icon={faEnvelope} /></p>
                            </Col>
                                <Col ><p>navotsaah@gmail.com</p>
                                </Col>

                            </Row>
                            <hr />
                            <Row style={{ alignItems: "center" }}> <Col md={1}>
                                <p><FontAwesomeIcon icon={faClock} /></p>
                            </Col>
                                <Col ><p>Mon-Sat: 8:30 am - 5:00 pm</p>
                                    <p>     Sun: 10:00 am - 12:00 pm</p></Col>

                            </Row>
                        </div>
                    </Col>
                    <Col md={4} className="text-center footer-section">
                        <div className="map">
                            <h5>Our Location</h5>
                            <iframe
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1VnYC6EugmolDY9RjsZ77TeXstyj0288&q=EVOLVE+Centre&center=30.7405924,76.7404349&zoom=14"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
};

export default Footer;