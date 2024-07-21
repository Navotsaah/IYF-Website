// Mentor.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import mentorImage from '../../../assets/images/Prabhuji.png';
import '../../../assets/css/mentor.css';

const Mentor = () => {
    return (
        <Container className="mentor-container">
            <Row>
                <h1 className='text-center mentor_heading'>Meet your Mentor</h1>
                <Col xs={12} md={4} className="text-center">
                    <Image src={mentorImage} alt="Mentor" className="mentor-image" fluid />
                </Col>

                <Col xs={12} md={8}>
                    <div className="mentor-details">
                        <h2>HG Namprem Das</h2>
                        <h5>President ISKCON Chandigarh | ISKCON Panchkula</h5>
                        <h5>Presidential Award Winner</h5>
                        <p>
                            An expert in the profound teachings of the Bhagavad Gita with 20+ years of experience.
                            Practicing Monkhood since last 20 years.
                            Mentored 1000+ Youths on spiritual Path.
                            Saved 2000+ youths from Depression | Addiction | Suicide etc
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Mentor;
