import React from "react";

export default function MovieDetails({ selectedMovie }) {
  return (
    <div className="selected-movie">
      {selectedMovie && (
        <div className="selected-movie-image">
          <img src={selectedMovie.image} alt={selectedMovie.title} />
          <div className="selected-movie-details">
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
