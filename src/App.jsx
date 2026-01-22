import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI'; // Import API component

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = true; 

  return (
    <div>
      <h1>Lab Activity 3</h1>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
      <UserList users={users} />
      <Counter />
      <UserAPI />
    </div>
  );
}

export default App;