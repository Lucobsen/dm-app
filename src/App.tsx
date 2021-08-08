import React from 'react';
import './App.css';
import { NavBar } from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Welcome to Luke's DM App
        </p>
      </header>
    </div>
  );
}

export default App;
