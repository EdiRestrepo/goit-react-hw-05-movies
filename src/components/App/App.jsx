import { Routes, Route, } from 'react-router-dom'
import  {Home}  from '../../pages/Home'
import { Navbar } from '../navbar'
import { Movies } from '../../pages/Movies'
import { MovieDetails } from '../MovieDetails'
import { Cast } from '../Cast'
import { Reviews } from '../Reviews'
import { navLinks } from '../utils/routes'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<Navbar navLinks={navLinks}/>}>
            <Route index element={<Home/>} />
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movieId' element={<MovieDetails/>}>
            <Route path='cast' element={<Cast/>}/>
            <Route path='reviews' element={<Reviews/>}/>
          </Route>
          <Route path='*' element={<Home/>}/>
          </Route>
        </Routes>
    </>
  )
}

export default App
