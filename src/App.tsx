import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todolist from './pages/Todolist';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <header>
        <Link to='/'>Home</Link>
        <Link to='/todolist'>TodoList</Link>
      </header>

      <Routes>
        <Route path='/' element={<Home userName={userName} setUserName={setUserName} />} />
        <Route path='/todolist' element={<Todolist userName={userName} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
