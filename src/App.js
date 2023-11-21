import {useState} from 'react';
import './App.css';
import { Button, Card, Image } from 'react-bootstrap';
import profile from './profile.svg'
import Profile from './components/ProfileUpload';
import PersonalInfo from './components/PersonalInfo.js';
import Interests from './components/Interests.js';

const App = () => {

  return (
    <div>
      <Profile/>
     <PersonalInfo/>
     <Interests/>
    </div>
  );
}

export default App;
