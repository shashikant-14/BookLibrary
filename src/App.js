import logo from './logo.svg';
import './App.css';
import CreateBook from './Component/CreateBook/CreateBook';
import BookList from './Component/BookList/BookList';
import { useState, useContext } from 'react';
import { BrowserContext } from './Context/Provider';

function App() {
  const count = useContext(BrowserContext);

  console.log(count);
  return (
    <div className='container'>
      <BookList/>
      <CreateBook/>
    </div>

  );
}

export default App;
