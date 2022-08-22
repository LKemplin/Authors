import React, {useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom';

const UpdateAuthor = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [name, setName ] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((results) => {
            console.log(results.data);
            setName(results.data.name);
        }).catch((err) => console.log(err))
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/edit/${id}`, {
            name
        }).then(results => {
            console.log(results);
            navigate('/');
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.error)
        })
    }

    return (
    <div>
         <h1>Favorite Authors</h1>
        <Link to='/'>Home</Link>
        <form className='form' onSubmit={updateHandler}>
            <label className='form-label'>Name: </label>
            <input type="text" value={name} className='form-control' onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className='text-danger'>{errors.name.message}</p>}
            <input type="submit" value="Submit" />
            <Link to='/'><button>Cancel</button></Link>
        </form>
    </div>
  )
}

export default UpdateAuthor