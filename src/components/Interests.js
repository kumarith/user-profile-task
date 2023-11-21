import { useEffect, useState } from 'react';
import { Button, Card, Row, Col, Modal } from 'react-bootstrap';
import '../App.css';
import Badge from 'react-bootstrap/Badge';

const Interests = ({ userIntersts }) => {
    console.log("userIntersts" + userIntersts);
    const [localUserIntersts, setlLocalUserIntersts] = useState(userIntersts);
    const [showModal, setShowModal] = useState(false);
    const [newInterst, setNewInterest] = useState('');

    useEffect(() => {
        setlLocalUserIntersts(userIntersts);
    }, [userIntersts]);

    const handleAddTag = () => {
        if (newInterst.trim()) {
            setShowModal(false);
            let _localUserIntersts = localUserIntersts;
            _localUserIntersts.push(newInterst)
            setNewInterest('');
            setlLocalUserIntersts(_localUserIntersts);
        }
    };


    const handleOpenModal = () => { setShowModal(true); };
    const handleCloseModal = () => { setShowModal(false); };
    const removeTag = (interestToDelete) => {
        let arr = localUserIntersts;
        setlLocalUserIntersts (arr.filter(item => item !== interestToDelete) );
    
    };

    return (
        <div>
            <Card className=' d-flex card-containerpersonal' >
                <Card.Body className='card-personal'>
                    <Row>
                        <Col md={8}>
                            <h5 style={{ marginBottom: '30px' }}>Other settings </h5>
                            <p><b>Interests</b></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            {localUserIntersts.map((interest, index) => (
                                
                                    <Badge
                                        key={index}
                                        bg="white"
                                        className="mr-20 mb-10 custom-tag"
                                        style={{ fontSize: '0.8rem', margin: '5px' }}
                                        onClick={() => { removeTag(interest) }}
                                    >
                                        {interest}
                                    </Badge>
                            ))}

                            <Badge
                                variant="secondary"
                                className="mr-20 mb-10 "
                                style={{ fontSize: '0.8rem', margin: '5px', cursor: 'pointer'}}
                                onClick={handleOpenModal}
                            >
                                + Interest
                            </Badge>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

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
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default Interests