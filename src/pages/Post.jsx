import React from "react";
import { Link, useParams } from "react-router-dom";

export const Post = () => {
  const { id } = useParams();
  return (
    <>
      <div>Post {id}</div>
      <Link to='/goit-react-hw-05-movies/posts'>Go back</Link>
    </>
  );
};
