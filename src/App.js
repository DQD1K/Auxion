import './style.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mainpage from "./components/main_page";
import Registr from "./components/registration_page";
import Navigation from "./components/navigation";
import Header from "./components/components1,1/Header"
import Account from "./components/account_page"
import Auth from "./components/authtorization_page"
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: 'name',
    email: 'email@mail.com',
    password: 'password'
  })


  return (
    <div>
      <Header />

    </div>
      );
}

export default App;
