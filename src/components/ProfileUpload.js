import {useState} from 'react';
import '../App.css';
import { Button, Card, Image } from 'react-bootstrap';
import profile from '../profile.svg'

const ProfileUpload = () => {
    const [profilePicture, setProfilePicture] = useState (null)
   
    const handleChange = (e) => {
     setProfilePicture(e.target.value)
     alert("hi")
    }
   
     return (
       <div>
         <Card className='card-containerprofile'>
         <Image src={profilePicture || profile} alt ="profile"  roundedCircle={true}  style={{width : "50%", height:"50%", float:"left", alignContent:"left"}} />
         <Card.Title className='card-body'>Profile app</Card.Title>
         <Card.Text className='card-body'>Update your photo and personal information</Card.Text>
         <div className='button-container'>
         <Button className = "button" variant = "primary" size = "sm" onClick={handleChange} >Upload new picture</Button>
         </div>
         </Card>
       </div>
     );
   }
   
   export default ProfileUpload;