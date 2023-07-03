import React, { useEffect, useMemo } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

export const Posts = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const search = useMemo(()=>searchParams.get('search'),[searchParams]);
 const location = useLocation();

 const backLinkHref = location.state?.from ?? "/home";

 

 useEffect(()=>{
  console.log(location);
 },[])

  const hanleSubmit = (e)=>{
      e.preventDefault();
      const {elements } = e.target;
      console.log(elements.search.value);
  }
  return (
    <>
    <Link to={backLinkHref}>Go Back</Link>
      <form onSubmit={hanleSubmit}>
        <input type="text" name="search" value={search} onChange={(e)=>{setSearchParams({search:e.target.value})}} />
        <button type='submit'>Search</button>
      </form>
    <ul>
        <li>
            <Link to="/goit-react-hw-05-movies/post/1">Post 1</Link>
            <Link to="/goit-react-hw-05-movies/post/2">Post 2</Link>
            <Link to="/goit-react-hw-05-movies/post/3">Post 3</Link>
            <Link to="/goit-react-hw-05-movies/post/4">Post 4</Link>
            <Link to="/goit-react-hw-05-movies/post/5">Post 5</Link>
        </li>
    </ul>
    </>
  )
}
