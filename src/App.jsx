import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import './App.css'; 

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = false; 

  return (
    /* This wrapper will be used to center everything */
    <div className="page-wrapper">
      <div className="main-container">
        <h1>Lab Activity 3</h1>
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
        
        <div className="component-group">
          <h3>User List Component</h3>
          <UserList users={users} />
        </div>

        <div className="component-group card">
          <h3>Counter Component</h3>
          <Counter />
        </div>

        <div className="component-group">
          <h3>User API Data</h3>
          <UserAPI />
        </div>
      </div>
    </div>
  );
}

export default App;