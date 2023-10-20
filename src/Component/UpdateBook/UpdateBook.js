import React, { useEffect, useRef } from 'react'
import './UpdateBook.css'

function UpdateBook({ book, onUpdate }) {
    const inputRef = useRef();
    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate(inputRef.current.value);
        inputRef.current.value = null;
    }
    useEffect(() => {
        console.log(book);
        inputRef.current.value = book.title
    }, []);

    return (
        <div className='updateBook'>
            <form onSubmit={handleUpdate}>
                <input ref={inputRef} />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateBook
