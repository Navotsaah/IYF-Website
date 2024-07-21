import React from 'react';
import CoursesImage from "../../../assets/images/Courses.png"; // Import the images
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/css/courses.css"; // Import the CSS file
const coursesData = [
    {
        id: 1,
        title: "Course",
        description: "Discover the profound teachings of the Bhagavad Gita in our comprehensive course. This program delves into the fundamental principles and timeless wisdom of this sacred text, offering insights into its philosophical and spiritual dimensions. Perfect for beginners, it provides a clear and accessible introduction to the core concepts that shape this revered scripture.",
        imageUrl: CoursesImage, // You can use the uploaded image URL or import it as shown earlier
        buttonText: "Register",
        link: "#register"
    },
    // Add more courses as needed
];

const Courses = () => {
    return (
        <Container className="courses">
            {coursesData.map(course => (
                <Row key={course.id} className="my-4">
                    <Col md={12}>
                        <h2>{course.title}</h2>
                    </Col>
                    <Col md={6}>
                        <img src={course.imageUrl} alt={course.title} className="img-fluid" />
                    </Col>
                    <Col md={6} className="d-flex flex-column justify-content-center">
                        <h3>Learn basics of Bhagavad Gita.</h3>
                        <p>{course.description}</p>
                        <Button variant="dark" href={course.link}>{course.buttonText}</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Courses;
