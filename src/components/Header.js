import { useState, useRef } from 'react';
import '../App.css';
import { Button, Card, Image, Row, Col, Modal } from 'react-bootstrap';
import profile from '../profile.svg'
import { FaExclamationCircle } from 'react-icons/fa';


const Header = () => {

  const [image, setImage] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  const handleDelete = (e) => {
    setImage(null);
    setShowDeleteModal(false);
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
    setShowDeleteModal(false);
  };

  return (
    <div>
      <Card className='card-profileheader'>
        <Card.Body>
          <Row className="align-items-center" style={{ justifyContent: 'center'}}>
            <Col  md={3} xs={12} >
              <Image  className = "upload-image" src={(image !== null) ? image : profile} alt="profile" roundedCircle={true}  />
            </Col>
            <Col md={4} xs={12} className="text-left">
              <h5>Profile Name</h5>
              <p style={{color:'grey'}}>Update your photo and personal information</p>
            </Col>

            <Col className="text-end" md={5} xs={12}>
              <input ref={fileInputRef} style={{ display: "none" }} type="file" accept='/image/' variant="primary" size="sm" onChange={handleChange} />
              <Button   variant="primary" size="sm" onClick= {handleButtonClick} >Upload picture</Button>
              { (image !== null) && (
                <Button  variant="light" style={{marginLeft:"10px"}} size="sm" onClick={() => { setShowDeleteModal(true) }} >Delete picture</Button>)}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      { /** Model of delete warning*/}
      <Modal className="square-modal" show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
       <Modal.Header style={{ textAlign: 'center' }} >
       <FaExclamationCircle style={{ fontSize: '24px', color: 'red', justifyContent:'center' }} />
        </Modal.Header>
        <Modal.Body>
          Delete profile photo?
          <p style={{color:'grey', whiteSpace: 'nowrap'}}>You are about to delete your prfile photo. would you like to proceed?</p>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowDeleteModal(false)}>
            No, keep it
          </Button>
          <Button variant="danger" onClick={handleDelete}>
          Yes, delete it
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default Header;