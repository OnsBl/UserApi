import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    // State to store the list of users
  const [listOfUsers, setListOfUsers] = useState([]);
// Fetch user data from the API when the component mounts
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
          // Update the state with the fetched user data
        setListOfUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul>
        {listOfUsers.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.username})<br />
            Email: {user.email}<br />
            Phone: {user.phone}<br />
            Address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
