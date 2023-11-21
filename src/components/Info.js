import { useState } from 'react';
import React from 'react';
import { Button, Card, Row, Col, Alert } from 'react-bootstrap';
import '../App.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


const Info = ({ userInfo }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [localUserInfo, setLocalUserInfo] = useState(userInfo);
    const [error, setError] = useState('');

    
    const parseDate = (text) => {
        const parts = text.split('-');
        const year = parseInt(parts[0]);
        const day = parseInt(parts[1]);
        const month = parseInt(parts[2]) - 1; 
        return new Date(year, month, day);
      };

    const handleClick = () => {
        let validationErrors = validateAndMakeError() ;
        if ( isEditMode && validationErrors !== "" ) {
            setError(validationErrors);
            return;
        } else {
            setError("");
            setIsEditMode(!isEditMode);
        }
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\+\d{10}$/; // Regular expression for + followed by 10 digits
        return phoneRegex.test(phoneNumber);
      };
      const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
        return emailRegex.test(email);
      };

    const validateAndMakeError = ()  => {
        if(localUserInfo.firstName === "") return "First name cannot be null";
        if(localUserInfo.lastName === "") return "Last name cannot be null";
        if(!validatePhoneNumber(localUserInfo.phoneNumber)) return "Invalid phone number (needs to be +45xxxxxxxx) !";
        if(!validateEmail(localUserInfo.email)) return "Invalid Email !";
        return "";
    };

    const handleOnBlur = (event) => {
        let _localuserInfo = localUserInfo;
        switch (event.target.name) {
            case "firstName":
                _localuserInfo.firstName = event.target.value;
                break;
            case "lastName":
                _localuserInfo.lastName = event.target.value;
                break;
            case "email":
                _localuserInfo.email = event.target.value;
                break;
            case "phoneNumber":
                _localuserInfo.phoneNumber = event.target.value;
                break;
            case "birthday":
                _localuserInfo.birthday = event.target.value;
                break;
            default:
        }
        setLocalUserInfo(_localuserInfo);
    }

    const handleBirthDayChange = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
       
        let _localuserInfo = localUserInfo;
        _localuserInfo.birthday = `${year}-${month}-${day}`;
        setLocalUserInfo(_localuserInfo);
      };
    

    return (
        <div>
            <Card className=' d-flex card-containerpersonal' >
                <Card.Body className='card-personal'>
                    <Row>
                        <Col md={6}>
                            <h5 style={{ marginBottom: '30px' }}>Personal Info</h5>
                        </Col>
                       
                        <Col md={6} className="text-end">
                            <Button style={{textDecoration: 'none'}} variant={"link"} size="sm" onClick={handleClick} >{isEditMode ? "Done" : "Edit info"}</Button>
                        </Col>
                    </Row>
                    <Row md={12} style={{ height: '30px' }}  className="d-flex justify-content-center">
                        <Col>
                            {error && <Alert className="d-flex align-items-center"  style={{ height: '20px' }} variant="danger">{error}</Alert>}
                        </Col>  
                    </Row>

                    <Row>
                        <Col xs={12} md={3} className="order-md-2">
                            <p><b>First name *</b></p>
                            {!isEditMode ? (
                                <p>{localUserInfo.firstName}</p>
                            ) : (
                                <input plaintext name="firstName" defaultValue={localUserInfo.firstName} onBlur={(e) => { handleOnBlur(e) }} />
                            )}
                        </Col>
                        <Col xs={12} md={3} className="order-md-2">
                            <p><b>Last name *</b></p>
                            {!isEditMode ? (
                                <p style={{ width: "100%",justifyContent: 'left' }}>{localUserInfo.lastName}</p>
                            ) : (
                                <input plaintext name="lastName" defaultValue={localUserInfo.lastName} onBlur={(e) => { handleOnBlur(e) }} />
                            )}
                        </Col>
                    </Row>
                    <div className='mb-3' />
                    <Row>
                        <Col xs={12} md={3} className="order-md-2">
                            <p><b>Phone *</b></p>
                            {!isEditMode ? (
                                <p>{localUserInfo.phoneNumber}</p>
                            ) : (
                                <input plaintext name="phoneNumber" defaultValue={localUserInfo.phoneNumber} onBlur={(e) => { handleOnBlur(e) }} />
                            )}
                        </Col>
                        <Col xs={12} md={5} className="order-md-2">
                            <p><b>Email *</b></p>
                            {!isEditMode ? (
                                <p>{localUserInfo.email}</p>
                            ) : (
                                <input style={{ width: "100%",  }} plaintext name="email" defaultValue={localUserInfo.email} onBlur={(e) => { handleOnBlur(e) }} />
                            )}
                        </Col>
                    </Row>
                    <div className='mb-3' />
                    <Row>
                        <Col xs={12} md={6} className="order-md-2">
                            <div>
                                <p><b>Birthday</b></p>
                            </div>
                            {!isEditMode ? (
                                <p>{localUserInfo.birthday}</p>
                            ) : (
                                <DatePicker  name = "birthday"  value={parseDate(localUserInfo.birthday)}  selected={parseDate(localUserInfo.birthday)} onChange={handleBirthDayChange}  dateFormat="yyyy-MM-dd" className="form-control" />
                            )}

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Info