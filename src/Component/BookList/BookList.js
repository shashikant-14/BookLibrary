import React from 'react';
import ShowBook from '../ShowBook/ShowBook'
import './BookList.css'

function BookList({ booksData, onDelete, onUpdate }) {
  return (

    <>
    <h1>Books Library</h1>
    <div className='bookList'>
      {booksData.map((item) => (
        <ShowBook key={item.id} book={item} onDelete={onDelete} onUpdate={onUpdate}/>
      ))}

    </div>
    </>
  )
}

export default BookList
