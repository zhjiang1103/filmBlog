import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import FilmList from './components/FilmList'
import FilmDetail from './components/FilmDetail';
import ViewFilm from './components/ViewFilm';
import {Link,Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import form from './components/Form';

function Home() {


  return (
    <>
      <MyNavBar />
      <nav>
        <ul>
          <li>
            <Link to = "/">Welcome</Link>
          </li>
          <li>
            <Link to = "/films">Films</Link>
          </li>
          <li>
            <Link to = "/films/new">Register a new film</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />}/> 
        <Route path="/films" element={<FilmList />} />
        <Route path="/films/:id" element={<FilmDetail />} />
        <Route path="/films/new" element={<form />} />
        
        
        </Routes>  
      </>
    
  )
}

export default Home
