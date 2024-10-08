import axios from "axios";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import HomePage from './pages/Home.page';
import MoviePage from './pages/Movie.page';
import PlayPage from './pages/Play.page';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params ={};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"]="Api"
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;