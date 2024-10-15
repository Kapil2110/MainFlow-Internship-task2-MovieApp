import React, { useState, useEffect } from "react";
import searchIcon from "./assets/searchIcon.png";
import MovieCard from "./components/movieCard/MovieCard";
import "./App.css";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=3e9a8ac6";

const App = () => {
  const [searchBar, setSearchbar] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    SearchMovie("batman");
  }, []);

  const SearchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data);
  };

  return (
    <div className="body">
      <div className="logo">
        <h2>MOVIE Land</h2>
      </div>
      <div className="search">
        <center>
          <input
            value={searchBar}
            onChange={(e) => setSearchbar(e.target.value)}
            placeholder="Search your movies..."
          />
          <img
            src={searchIcon}
            alt="search"
            onClick={() => SearchMovie(searchBar)}
          />
        </center>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found...</h2>
        </div>
      )}
    </div>
  );
};

export default App;
