import { useState } from 'react';
import '../App.css';
import { Button, Card, Image, Row, Col} from 'react-bootstrap';
import profile from '../profile.svg'

const Header = () => {
  const [profilePicture, setProfilePicture] = useState(null)
  const handleChange = (e) => { 
    setProfilePicture(e.target.files[0])
    console.log("hi")
  }

  return (
    <div>

      <Card className='card-profileheader'>
        <Card.Body>
          <Row className="align-items-center" style={{ justifyContent: 'center' }}>
            <Col >
              <Image src={profile} alt="profile" roundedCircle={true} style={{ width: "30%", height: "30%", float: "left", alignContent: "left" }} />
            </Col>
            <Col>
              <h6>Profile Name</h6>
              <p>Profile Text goes here.</p>
            </Col>
            <Col>
              <Button className="button" variant="primary" size="sm" onClick={handleChange} >Upload new picture</Button>{' '}
              <Button className="button" variant="secondary" size="sm" onClick={handleChange} >Delte picture</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Header;