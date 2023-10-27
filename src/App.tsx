import { useState } from 'react';
import './App.css';
import CreateUser from './components/CreateUser/CreateUser';
import UserList from './components/UserList/UserList';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
}

export default App;
