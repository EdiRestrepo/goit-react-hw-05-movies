import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  color: green;

  &.active {
    color: red;
  }
`;

export const SharedLayout = () => {
  return (
    <>
    <nav>
    <ul>
      <li>
        <StyledLink to='/goit-react-hw-05-movies/'>Home</StyledLink>
      </li>
      <li>
        <StyledLink to='/goit-react-hw-05-movies/about'>About</StyledLink>
      </li>
      <li>
        <StyledLink to='/goit-react-hw-05-movies/team' >Team</StyledLink>
      </li>
      <li>
        <StyledLink to='/goit-react-hw-05-movies/posts' >Posts</StyledLink>
      </li>
    </ul>
  </nav>
  <Outlet/>
  </>
  )
}
