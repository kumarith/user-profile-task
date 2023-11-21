import { useState } from 'react';
import { Button, Card, Row, Col, Modal } from 'react-bootstrap';
import '../App.css';
import Badge from 'react-bootstrap/Badge';


const Interests = ({ userIntersts }) => {
    const [localUserIntersts, setlLocalUserIntersts] = useState(userIntersts);
    const [showModal, setShowModal] = useState(false);
    const [newInterst, setNewInterest] = useState('');
   
    const handleAddTag = () => {
        if (newInterst.trim()) {
            setNewInterest('');
            handleCloseModal();
            let _localUserIntersts = localUserIntersts;
            _localUserIntersts.push(newInterst)
            setlLocalUserIntersts(_localUserIntersts);
        }
    };


    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    return (
        <div>
            <Card className=' d-flex card-containerpersonal' >
                <Card.Body className='card-personal'>
                    <Row>
                        <Col md={8}>
                            <h5 style={{ marginBottom: '30px' }}>Intersts </h5>
                        </Col>
                        <Col md={2} className="text-right">
                            <Button className="button" variant="primary" size="sm" onClick={handleOpenModal} >Add</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            {localUserIntersts.map((interest, index) => (
                                <Badge
                                    key={index}
                                    variant="primary"
                                    className="mr-20 mb-10"
                                    style={{ fontSize: '0.8rem', margin: '5px' }}
                                >
                                    {interest}
                                </Badge>
                            ))}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/** Model for adding new intersts */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Interest</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        placeholder="Enter Intrest"
                        value={newInterst}
                        onChange={(e) => setNewInterest(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddTag}>
                        Add Tag
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )

}
export default Interests