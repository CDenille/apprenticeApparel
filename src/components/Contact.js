import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Logo from '../../Logo.png'
import './Contact.css';

const Contact = () => {

    const github = (name) => {
        const url = `https://github.com/${name}`;
        window.open(url, '_blank');
    }

    return (
        <div className='contact-wrapper'>
            <h1>About Apprentice Apparel</h1>
            <div className='constact'>
                <div className='team'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Serge Nikiema</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('sergethi')}>GitHub</Button>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Mamadou Diallo</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('saliouprogress')}>GitHub</Button>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Denille Carrington</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('CDenille')}>GitHub</Button>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Cesar Nina</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="button" onClick={()=>github('cesarsnina')}>GitHub</Button>
                    </Card>
                </div>
                <div className='contact-us'> 

                </div>
            </div>
        </div>
    )
}

export default Contact;