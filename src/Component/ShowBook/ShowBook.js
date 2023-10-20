import React, { useContext, useMemo, useState } from 'react'
import './ShowBook.css'
import logo192 from '../../logo.svg'
import UpdateBook from '../UpdateBook/UpdateBook';
import { BrowserContext } from '../../Context/Provider';

function ShowBook({ book }) {
  const [isEnabled, setIsenabled] = useState(false);
  const { handleDelete, handleUpdate } = useContext(BrowserContext);
  const onDelete = () => {
    handleDelete(book.id);
  }

  const onUpdate = (title) => {
    handleUpdate({ ...book, title });
    setIsenabled(!isEnabled);

  }

  const content = useMemo(() => isEnabled ? <UpdateBook book={book} onUpdate={onUpdate} /> : <h1>{book.title}</h1>, [isEnabled]);

  return (

    <div>
      <div className='ShowBook'>
        <button id='deletebtn' onClick={onDelete}>X</button>
        <button id='updatebtn' onClick={() => { setIsenabled(!isEnabled) }}>Update</button>
        <img alt={book.title} src={logo192} />
        {content}
      </div>

    </div>
  )
}

export default ShowBook
