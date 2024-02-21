import React from "react";

export default function Movie({ image, title, onClickHandler }) {
  return (
    <div className="movie-item">
      <img src={image} alt={title} onClick={() => onClickHandler()} />
    </div>
  );
}
