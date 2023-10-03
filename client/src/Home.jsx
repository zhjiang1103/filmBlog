import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import FilmList from './components/FilmList'


function Home() {

  return (
    <div className="App">
      <MyNavBar />
      <FilmList />

    </div>
  )
}

export default Home
