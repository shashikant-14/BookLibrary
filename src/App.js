import logo from './logo.svg';
import './App.css';
import CreateBook from './Component/CreateBook/CreateBook';
import BookList from './Component/BookList/BookList';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const handleSubmit = (title) => {
    let newBook = {
      id: Math.floor(Math.random() * (999 - 100) + 100),
      title
    }

    setBooks([...books, newBook]);
  }

  const handleDelete = (id) => {
    let updatedData = books.filter((book) => book.id != id)
    setBooks(updatedData);
  }

  const handleUpdate = (updatedbook) =>{
    let updatedData = books.map((book)=>{
      if(book.id == updatedbook.id){
        console.log(updatedbook.title)
        return updatedbook;
      }
      return book;
    });

    setBooks(updatedData);
  }

  console.log(books);
  return (
    <div className='container'>
      <BookList booksData={books} onDelete={handleDelete} onUpdate = {handleUpdate}/>
      <CreateBook onSubmit={handleSubmit} />
    </div>

  );
}

export default App;
