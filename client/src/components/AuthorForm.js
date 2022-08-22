import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const AuthorForm = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState({})
    
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/create', {
            name
        })
            .then((results) => {
                console.log(results);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.error);
            });
    }
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to='/'>Home</Link>
        <form className='form' onSubmit={submitHandler}>
            <label className='form-label'>Name: </label>
            <input type="text" className='form-control' onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            <input type="submit" value="Submit" />
            <Link to='/'><button>Cancel</button></Link>
        </form>
    </div>
  )
}

export default AuthorForm;