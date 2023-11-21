import {useState} from 'react';
import { Button, Card } from 'react-bootstrap';
import '../App.css';

const Interests = () => {


    const handleChange = () => {
        alert("Add more")
    }


    return (
        <div>
        <Card className=' d-flex card-containerpersonal' >
         <Card.Title className='card-personal'>Other settings</Card.Title>
         <Card.Body className='card-personal'>
            <Card.Title>Interests</Card.Title>
           
            
            </Card.Body>
            
         <div className='button-container'>
         <Button className = "button" variant = "primary" size = "sm" onClick={handleChange} >Add more</Button>
         </div>
         </Card>
         </div>
        
    
    )
    
}
export default Interests