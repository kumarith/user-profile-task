import { useState } from 'react';
import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import '../App.css';

const Info = ({ userInfo }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [localUserInfo, setLocalUserInfo] = useState(userInfo);


    const handleClick = () => {
        setIsEditMode(!isEditMode);
    }

    return (
        <div>
            <Card className=' d-flex card-containerpersonal' >
                <Card.Body className='card-personal'>
                    <Row>
                    <Col md={8}>  
                    <h5 style={{ marginBottom: '30px' }}>Personal Info</h5>
                    </Col>
                    <Col md={2} className="text-right">  
                        <Button className="button" variant="primary" size="sm" onClick={handleClick} >{isEditMode ? "done" : "edit"}</Button>
                    </Col>
                    </Row> 
                    <Row>
                        <Col md={6}>
                            <p><b>First name</b></p>
                            <p>{localUserInfo.firstName}</p>
                        </Col>
                        <Col md={6}>
                            <p><b>Last name</b></p>
                            <p style={{ width: "100%" }}>{localUserInfo.lastName}</p>
                        </Col>
                    </Row>
                    <div className='mb-3' />
                    <Row>
                        <Col md={6}>
                            <p><b>Phone</b></p>
                            <p>{localUserInfo.phoneNumber}</p>
                        </Col>
                        <Col md={6}>
                            <p><b>Email</b></p>
                            <p>{localUserInfo.email}</p>
                        </Col>
                    </Row>
                    <div className='mb-3' />
                    <Row>
                        <Col md={6}>
                            <div>
                            <p><b>Birthday</b></p>
                            </div>
                            {!isEditMode ? (
                                <p>{localUserInfo.birthday}</p>
                            ) : (
                                <input value={localUserInfo.birthday} />
                            )}
                        </Col>
                    </Row>
                </Card.Body>

               
            </Card>
        </div>

    )

}
export default Info