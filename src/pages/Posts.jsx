import React from 'react'
import { Link } from 'react-router-dom'

export const Posts = () => {
  return (
    <ul>
        <li>
            <Link to="/goit-react-hw-05-movies/post/1">Post 1</Link>
            <Link to="/goit-react-hw-05-movies/post/2">Post 2</Link>
            <Link to="/goit-react-hw-05-movies/post/3">Post 3</Link>
            <Link to="/goit-react-hw-05-movies/post/4">Post 4</Link>
            <Link to="/goit-react-hw-05-movies/post/5">Post 5</Link>
        </li>
    </ul>
  )
}
