import React from 'react';
import UserList from './UserList';
import Counter from './Counter'; // Import Counter

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Lab Activity 3</h1>
      <UserList users={users} />
      <Counter />
    </div>
  );
}

export default App;