import React from 'react';
import UserList from './UserList';
import Counter from './Counter';
import UserAPI from './UserAPI';
import './App.css'; // Make sure to import the CSS file

function App() {
  const users = ['Alice', 'Bob', 'Charlie'];
  const isLoggedIn = false; 

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Lab Activity 3</h1>
        {isLoggedIn ? <p>Welcome back!</p> : <p className="status-msg">Please log in.</p>}
      </header>

      <main className="content-grid">
        <section className="card">
          <UserList users={users} />
        </section>

        <section className="card">
          <Counter />
        </section>

        <section className="card">
          <UserAPI />
        </section>
      </main>
    </div>
  );
}

export default App;