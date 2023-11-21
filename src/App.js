import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Info from './components/Info.js';
import Interests from './components/Interests.js';
import { Container, Row, Col, Table} from 'react-bootstrap';


const UserProfile = ({ props }) => {
   const {uid} = useParams()


   // Defautl values
   const userProfileInfo = {
    firstName: '',
    lastName: '',
    phoneNumber:'',
    email:'',
    birthday:''

  };

  const userInterstsDefaultVaules = [];

  const [userProfile, setUserProfile] = useState(null);
  const [userInfo, setUserInfo] = useState(userProfileInfo);
  const [userIntersts, setUserIntersts] = useState(userInterstsDefaultVaules);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/users/'+uid); // Replace with your API endpoint
        const result = await response.json();
      
        setUserProfile(result);
        let _userInfo = userInfo;
        _userInfo.firstName=result.firstName;
        _userInfo.lastName=result.lastName;
        _userInfo.phoneNumber=result.phoneNumber;
        _userInfo.email=result.email;
        _userInfo.birthday=result.birthday;
        setUserInfo(_userInfo);
        setUserIntersts(result.interests);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
   fetchData();
  }, []); 



  return (
    <div>
      <Container>
        <Row>
          <Col md={8}>
            <div>
              <Header />
              <Info userInfo={userInfo} />
              <Interests userIntersts={userIntersts} />
            </div>
          </Col>
          <Col md={4}>
            <div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Home = ({ props }) => {

  return (
    <div className="table-responsive">
    <h4>User list</h4>
    <Table striped bordered hover width={400}>
      <thead>
        <tr>
          <th>User</th>
          <th>Profile URL</th>
        </tr>
      </thead>
      <tbody>
        
          <tr >
            <td>User 1</td>
            <td> <Link to={`/profile/1`}>View Profile</Link></td>
          </tr>
        
      </tbody>
    </Table>
  </div>
  );


}




// Main App
const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/profile/:uid"  element={<UserProfile />}  />
      <Route exact path="/"  element={<Home />}  />

    </Routes>
    </Router>

  );
};




export default App;
