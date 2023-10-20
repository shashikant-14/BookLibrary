import React, { useRef } from 'react'
import './CreateBook.css'

function CreateBook({onSubmit}) {
    const inputRef = useRef(null);
    const handleSubmit = (e)=>{
        e.preventDefault();
        inputRef.current.value && onSubmit(inputRef.current.value);
        inputRef.current.value = null;
    }

  return (
    <div className='CBookContainer'>
        <h1>This is create book component</h1>
        <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text'></input>
        <button>add Book</button>
        </form>
      
    </div>
  )
}

export default CreateBook;
