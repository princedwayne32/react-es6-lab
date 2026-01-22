import React, { useState, useEffect } from 'react';

function UserAPI() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>User API Data</h3>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default UserAPI;