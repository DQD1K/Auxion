import './style.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Mainpage from "./components/main_page";
import Registr from "./components/registration_page";
import Navigation from "./components/navigation";
import Header from "./components/components1,1/Header"
import Account from "./components/account_page"
import Auth from "./components/authtorization_page"

function App() {
  return (
    <div>
      <Header />

      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/registration" element={<Registr />} />
            <Route path="/account" element={<Account />} />
            <Route path="/authtorization" element={<Auth />} />
          </Routes>
        </div>
      </Router>


     </div>
      );
}

export default App;
