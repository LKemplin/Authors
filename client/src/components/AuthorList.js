import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const AuthorList = (props) => {
    const {authorList, setAuthorList} = props

    const removeFromList = (authorID) => {
        const newAuthorList = authorList.filter((author) => {
          return author._id !== authorID
        })
        setAuthorList(newAuthorList)
      }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((results) =>{
            console.log(results)
            setAuthorList(results.data.sort((a, b) => a.name.localeCompare(b.name)));
        }).catch((err) => {
            console.log(err)
        })
    })

    const deleteHandler = (authorID) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
        .then((res) => {
            removeFromList(authorID)
        }).catch((err) => console.log(err))
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to='/new'>Add a new author</Link>
        <table>
            <thead>
                <tr>
                    <td>Author Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    authorList.map((author) => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <button><Link to={`/authors/edit/${author._id}`}>Edit</Link></button>
                                <span> | </span>
                                <button onClick={() => deleteHandler(author._id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default AuthorList;