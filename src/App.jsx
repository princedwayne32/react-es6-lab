import React from 'react';
import UserList from './UserList'; // Import the new component

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Lab Activity 3</h1>
      <UserList users={users} />
    </div>
  );
}

export default App;