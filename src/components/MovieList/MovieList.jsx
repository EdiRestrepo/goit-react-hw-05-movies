import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(({title, name, id})=>(
        <ul key={id}>
            <li>
              <Link to={`/goit-react-hw-05-movies/movies/${id}`}>
                {title || name}
              </Link>
            </li>
        </ul>
      ))}
    </>
  );
};
