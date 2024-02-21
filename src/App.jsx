import { useState } from "react";
import { movies } from "./data";
import Movie from "./Movies";
import MovieDetails from "./MovieDetails";
import "./App.css";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      <div className="container">
        <Movie movies={movies} handleMovieSelect={handleMovieSelect} />
        <MovieDetails selectedMovie={selectedMovie} />
      </div>
    </div>
  );
}

export default App;
