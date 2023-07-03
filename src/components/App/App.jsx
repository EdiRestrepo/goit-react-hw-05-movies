import { Box } from '@mui/material'
import css from './App.module.scss'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import  {Home}  from '../../pages/Home'
import { About } from '../../pages/About'
import { Team } from '../../pages/Team'
import { NotFound } from '../../pages/NotFound'
import styled from 'styled-components'
import { Post } from '../../pages/Post'
import { Posts } from '../../pages/Posts'
import { PostWithInfo } from '../../pages/PostWithInfo'
import { SharedLayout } from '../SahredLayout/SharedLayout'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/goit-react-hw-05-movies/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/goit-react-hw-05-movies/about' element={<About/>}>
          <Route path='mission' element={<h1>Mision</h1>}/>
        </Route>
        <Route path='/goit-react-hw-05-movies/team' element={<Team/>}/>
        <Route path='/goit-react-hw-05-movies/posts' element={<Posts/>}/>
        <Route exact path='/goit-react-hw-05-movies/post/:id' element={<Post/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
    </div>
  )
}

export default App
