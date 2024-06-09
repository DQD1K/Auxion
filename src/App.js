import './style.css'
import React, { useState } from 'react';
import Header from "./components/components1,1/Header";
import MLTS from "./components/components1,1/my_lots";

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
      <div style={{ background: '#F05248', width: '100%', height: '110px', overflow: 'hidden' }}>
        <div style={{ width: '200px', height: '100px', overflow: 'hidden' }}>
          <img src="sticker.png" style={{ width: '100px', height: '100px' }} alt="sticker" />
        </div>
        <div>
          <div style={{ position: 'absolute', right: '230px', top: '18px' }} className="maintext2">Войти</div>
          <div style={{ position: 'absolute', right: '210px', top: '18px' }} className="maintext2">|</div>
          <div style={{ position: 'absolute', right: '60px', top: '18px' }} className="maintext2">Регистрация</div>
        </div>
      </div>
      
      <div style={{ position: 'absolute', top: '110px', background: '#E9E7E7', width: '100%', height: '45px' }}></div>
      
      <div>
        <div style={{ position: 'absolute', left: '80px', top: '18px' }} className="maintext2" onClick={handleMainClick}>Главная</div>
        <div style={{ position: 'absolute', left: '200px', top: '18px' }} className="maintext2" onClick={handleMyLotsClick}>Мои лоты</div>
      </div>
      
      {showHeader ? <Header /> : <MLTS />}
      
      <div>
        <div style={{ position: 'absolute', bottom: '0', background: '#E9E7E7', width: '100%', height: '50%' }}>
          <div style={{ position: 'absolute', bottom: '0', background: '#F05248', width: '100%', height: '110px', overflow: 'hidden' }}>
            <div>
              <div style={{ position: 'absolute', left: '10px', bottom: '58px' }} className="maintext">Обратная связь</div>
              <div style={{ position: 'absolute', left: '10px', bottom: '44px' }} className="maintext">+7 (495) 570-25-11</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
