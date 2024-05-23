import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>
              <img src={user.avatar} alt={user.username} />
            </div>
            <div>
              <h2>{user.fullName}</h2>
              <p>{user.bio}</p>
              <p>Email: {user.email}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;