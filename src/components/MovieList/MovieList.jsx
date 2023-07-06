import React from "react";
import { Link } from "react-router-dom";

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.map(({title, name, id})=>(
        <ul key={id}>
            <li>
              <Link to={`/movies/${id}`}>
                {title || name}
              </Link>
            </li>
        </ul>
      ))}
    </>
  );
};
