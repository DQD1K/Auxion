import React, { useState } from 'react';
import RegistrForm from "./components1,1/registrationForm"

function Registr() {
    const [users, setUsers] = useState({
        users: []
      });
    
      const handleRegister = (userData) => {
        setUsers({
          users: [...users.users, userData]
        });
      };
    
      // Преобразование пользователей в JSON
      const usersJson = JSON.stringify(users, null, 2);
    
      return (
        <div>
          <h1>Registration Page</h1>
          <RegistrForm onRegister={handleRegister} />
          <h2>Registered Users:</h2>
          <pre>{usersJson}</pre>
        </div>
      );
}

export default Registr;