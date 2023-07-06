import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import PropTypes from "prop-types";
import React from 'react'

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: black;
    scale: 1.1
  }
`;

export const Navbar = ({navLinks}) => {
  return (
    <>
    <AppBar position='static'>
        <Toolbar>
           <Box>
            {navLinks.map(item=>(
                <Button
                    color='inherit'
                    key={item.title}
                    component={StyledLink}
                    to={item.path}
                >
                    {item.title}
                </Button>
            ))}
           </Box>
        </Toolbar>
    </AppBar>
           <Outlet/>
    </>
  )
}

Navbar.proTypes ={
    navLinks: PropTypes.array
}