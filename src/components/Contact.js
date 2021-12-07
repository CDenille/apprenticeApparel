import React from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import Logo from '../../Logo.png'
import './Contact.css';

const Contact = () => {

    const github = (name) => {
        const url = `https://github.com/${name}`;
        window.open(url, '_blank');
    }

    return (
        <Container className="contact-wrapper">
            <Row>
                <Col><h1 className="contact-header">About Apprentice Apparel</h1></Col>
            </Row>
            <Row>
            <Col>
                <Row>
                    <Col><h3 className="contact-header">The Team</h3></Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Serge Nikiema</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('sergethi')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Mamadou Diallo</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('saliouprogress')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Denille Carrington</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('CDenille')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Cesar Nina</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('cesarsnina')}>GitHub</Button>
                    </Card>
                </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col><h3 className="contact-header">Contact us here</h3></Col>
                </Row>
                <Row>
                <Col>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full name"
                        className="mb-3">
                        <Form.Control type="name" placeholder="James Bond" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone number"
                        className="mb-3">
                        <Form.Control type="phone number" placeholder="555-555-5555" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}/>
                    </FloatingLabel>
                    <Button className="button" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact;