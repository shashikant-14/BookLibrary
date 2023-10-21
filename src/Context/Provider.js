import { useEffect } from 'react'
import {  useState,createContext } from 'react'

const BrowserContext = createContext();
function Provider({children}) {
    const [books, setBooks] = useState([]);
    
    useEffect(()=>{
      console.log("HI");
      sessionStorage.getItem('BOOKS') && setBooks(JSON.parse(sessionStorage.getItem('BOOKS')));
    },[]);
    useEffect(()=>{
      if(books.length>0){
        sessionStorage.setItem('BOOKS',JSON.stringify(books));
      }
    },[books])

    const handleSubmit = (title) => {
        let newBook = {
          id: Math.floor(Math.random() * (999 - 100) + 100),
          title
        }
    
        setBooks([...books, newBook]);
      }
    
      const handleDelete = (id) => {
        let updatedData = books.filter((book) => book.id !== id)
        setBooks(updatedData);
      }
    
      const handleUpdate = (updatedbook) =>{
        let updatedData = books.map((book)=>{
          if(book.id === updatedbook.id){
            console.log(updatedbook.title)
            return updatedbook;
          }
          return book;
        });
    
        setBooks(updatedData);
      }

      const valueToSend = {
        books,
        handleSubmit,
        handleUpdate,
        handleDelete
      }
  return (
    <BrowserContext.Provider value={valueToSend}>
        {children}
    </BrowserContext.Provider>
  )
}

export {BrowserContext};
export default Provider;
