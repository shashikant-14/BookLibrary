import React, { useContext } from 'react';
import ShowBook from '../ShowBook/ShowBook'
import './BookList.css'
import { BrowserContext } from '../../Context/Provider';

function BookList() {
  const {books} = useContext(BrowserContext);
  return (
    <>
    <h1>Books Library</h1>
    <div className='bookList'>
      {books.map((item) => (
        <ShowBook key={item.id} book={item}/>
      ))}

    </div>
    </>
  )
}

export default BookList
