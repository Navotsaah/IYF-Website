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
                        <div className="navutsav contact-info">
                            <div style={{ textAlign: "center" }}>
                                <img src={iskon_img} alt="Navutsav" />
                            </div>
                            <p>Navutsav is dedicated to providing exceptional service and creating memorable experiences for all our clients.</p>
                        </div>
                    </Col>
                    <Col md={4} className="text-center footer-section">
                        <div className="contact-info">
                            <h5>Contact Info</h5>
                            <hr />
                            <Row style={{ alignItems: "center" }}> <Col md={1}>
                                <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
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
        </footer>
    );
};

export default Footer;