import React from 'react'

function MovieDisplay({movie, isLoading }) {
    if (isLoading) {
        return <h1>...Loading</h1>;
    }
  
    if (movie?.Response === "False") {
      return <h1>{movie?.Error}</h1>;
    } 

  return (
    <div>
        <h1>{movie?.Title}</h1>
        <h2>{movie?.Genre}</h2>
        <img src={movie?.Poster} alt={movie?.Title} />
        <h2>{movie?.Year}</h2>
    </div>
  )
}

export default MovieDisplay