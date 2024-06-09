import './style.css'
import React, { useState } from 'react';
import Header from "./components/components1,1/Header";
import MyLTS from "./components/components1,1/my_lots";

function App() {
  const [showHeader, setShowHeader] = useState(true);

  const handleMainClick = () => {
    setShowHeader(true);
  };

  const handleMyLotsClick = () => {
    setShowHeader(false);
  };

  return (
    <div>
      <div>
        <dir style={{ position: "absolute", left: "80px", top: "18px" }} className="maintext2" onClick={handleMainClick}>Главная</dir>
        <dir style={{ position: "absolute", left: "200px", top: "18px" }} className="maintext2" onClick={handleMyLotsClick}>Мои лоты</dir>
      </div>
      
      {showHeader ? <Header /> : <MyLTS />}
    </div>
  )
}

export default App;
