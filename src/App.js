import './App.css';
import CreateBook from './Component/CreateBook/CreateBook';
import BookList from './Component/BookList/BookList';

function App() {
  return (
    <div className='container'>
      <BookList/>
      <CreateBook/>
    </div>

  );
}

export default App;
