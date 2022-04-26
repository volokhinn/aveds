import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/App.scss';
import HeaderNotAuth from './components/Header/Header--NotAuth';
import HeaderAuth from './components/Header/Header--Auth';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <>
    <HeaderNotAuth />
    <Home />
    <HeaderAuth />
    <Profile />
    <HeaderAuth />
    <Contacts />
    </>
  );
}

export default App;
