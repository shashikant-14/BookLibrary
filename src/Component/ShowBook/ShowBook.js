import React, { useMemo, useState } from 'react'
import './ShowBook.css'
import logo192 from '../../logo.svg'
import UpdateBook from '../UpdateBook/UpdateBook';

function ShowBook({ book, onDelete, onUpdate }) {
  const [isEnabled, setIsenabled] = useState(false);
  const handleDelete = () => {
    onDelete(book.id);
  }

  const handleUpdate = (title) => {
    onUpdate({ ...book, title });
    setIsenabled(!isEnabled);

  }

  const content = useMemo(() => isEnabled ? <UpdateBook book={book} onUpdate={handleUpdate} /> : <h1>{book.title}</h1>, [isEnabled]);

  return (

    <div>
      <div className='ShowBook'>
        <button id='deletebtn' onClick={handleDelete}>X</button>
        <button id='updatebtn' onClick={() => { setIsenabled(!isEnabled) }}>Update</button>


        <img alt={book.title} src={logo192} />
        {content}
      </div>

    </div>
  )
}

export default ShowBook
