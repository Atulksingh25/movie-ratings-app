import React, { useState } from "react";
import "./App.css";

const moviesList = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "The Dark Knight" },
  { id: 4, title: "Avatar" },
  { id: 5, title: "Titanic" }
];

function App() {
  const [ratings, setRatings] = useState({});

  const rateMovie = (id, stars) => {
    setRatings(prev => ({ ...prev, [id]: stars }));
  };

  return (
    <div className="container">
      <h1 className="heading">🎬 Movie Rating App</h1>

      <div className="movie-list">
        {moviesList.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>

            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= (ratings[movie.id] || 0) ? "star filled" : "star"}
                  onClick={() => rateMovie(movie.id, star)}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="rating-text">
              {ratings[movie.id]
                ? `You rated: ${ratings[movie.id]} ⭐`
                : "No rating yet"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
