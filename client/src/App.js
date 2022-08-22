import './App.css';
import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import UpdateAuthor from './components/UpdateAuthor';

function App() {
  const [authorList, setAuthorList] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={AuthorList} path='/' authorList={authorList} setAuthorList={setAuthorList} />
          <Route element={AuthorForm} path='/new' />
          <Route element={UpdateAuthor} path='/authors/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
