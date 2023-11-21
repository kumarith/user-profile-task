import {useState} from 'react';
import React from 'react';
import { Button, Card, Row, Col} from 'react-bootstrap';
import '../App.css';

const PersonalInfo = () => {

    const handleChange = () => {
        alert("edited")
    }


    return (
        <div>
        <Card className=' d-flex card-containerpersonal' >
         <Card.Title className='card-personal'>Personal Info</Card.Title>
         <Card.Body className='card-personal'>
            <Row>
                <Col md={6}>
                <p>First name</p>
                <input type="text"  value="Thomson"/>
                </Col>
                <Col md={6}>
                <p>Last name</p>
                <input type="text"  value="Mike"/>
                </Col>
            </Row>
            <div className='mb-3' />
            <Row>
                <Col md={6}>
                <p>First name</p>
                <input type="text"  value="Thomson"/>
                </Col>
                <Col md={6}>
                <p>Last name</p>
                <input type="text"  value="Mike"/>
                </Col>
            </Row>
            <div className='mb-3' />
            <Row>
                <Col md={6}>
                <p>Birthday</p>
                <input type="text"  value="12/10/1999"/>
                </Col>
            </Row>
            </Card.Body>
            
         <div className='button-container'>
         <Button className = "button" variant = "primary" size = "sm" onClick={handleChange} >Edit Info</Button>
         </div>
         </Card>
    </div>

    )
    
}
export default PersonalInfo