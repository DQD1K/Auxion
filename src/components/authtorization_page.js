import React, { useState } from 'react';
import LoginForm from './components1,1/AuthPage';

function Authtorization(){
    const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (formData) => {
    // Здесь вы можете выполнить проверку имени пользователя и пароля
    // Например, сравнить с базой данных или хранилищем
    // В этом примере просто устанавливаем вошедшего пользователя в состояние
    setLoggedInUser(formData.username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <div>
          <h1>Welcome, {loggedInUser}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login Page</h1>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default Authtorization;