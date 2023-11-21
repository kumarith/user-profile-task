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

  return (
    <div>
      <Card className='card-profileheader'>
        <Card.Body>
          <Row className="align-items-center" style={{ justifyContent: 'center' }}>
            <Col md={3} >
              <Image src={(image !== null) ? image : profile} alt="profile" roundedCircle={true} style={{ width: "35%", height: "35%", float: "left", alignContent: "left" }} />
            </Col>
            <Col md={3} className="text-left">
              <h6>Profile Name</h6>
              <p>Profile Text goes here.</p>
            </Col>
            <Col className="text-right" md={6}>
              <div className="text-right">
              <input ref={fileInputRef} style={{ display: "none" }} type="file" accept='/image/' variant="primary" size="sm" onChange={handleChange} />
              <Button className="button" variant="primary" size="sm" onClick={() => { fileInputRef.current.click(); }} >Upload picture</Button>
              <Button className="button" variant="secondary" size="sm" onClick={() => { setShowDeleteModal(true) }} >Delete picture</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      { /** Model of delete warning*/}
      <Modal className="square-modal" show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
       <Modal.Header style={{ textAlign: 'center' }} >
       <FaExclamationCircle style={{ fontSize: '24px', color: 'red' }} />
        </Modal.Header>
        <Modal.Body>
        
          Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;