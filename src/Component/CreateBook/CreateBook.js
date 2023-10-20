import React, { useContext, useRef } from 'react'
import './CreateBook.css'
import { BrowserContext } from '../../Context/Provider';

function CreateBook() {
    const inputRef = useRef(null);
    const {handleSubmit} = useContext(BrowserContext);

    const onSubmit = (e)=>{
        e.preventDefault();
        inputRef.current.value && handleSubmit(inputRef.current.value);
        inputRef.current.value = null;
    }

  return (
    <div className='CBookContainer'>
        <h1>This is create book component</h1>
        <form onSubmit={onSubmit}>
        <input ref={inputRef} type='text'></input>
        <button>add Book</button>
        </form>
      
    </div>
  )
}

export default CreateBook;
