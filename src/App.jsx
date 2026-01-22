import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import './App.css'; 

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = false; 

  return (
    <div className="centered-container">
      <div className="content-box">
        <h1>Lab Activity 3</h1>
        {isLoggedIn ? <p>Welcome back!</p> : <p className="status">Please log in.</p>}
        
        <div className="component-section">
          <UserList users={users} />
        </div>

        <div className="component-section card">
          <Counter />
        </div>

        <div className="component-section">
          <UserAPI />
        </div>
      </div>
    </div>
  );
}

export default App;