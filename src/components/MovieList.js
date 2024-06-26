// // src/components/MovieList.js
// import React from 'react';
// import MovieItem from './MovieItem';

// function MovieList({ movies, onMovieSelect, onAddFavorite }) {
//   return (
//     <div className="movie-list">
//       {movies.map(movie => (
//         <MovieItem 
//           key={movie.id} 
//           movie={movie} 
//           onMovieSelect={onMovieSelect} 
//           onAddFavorite={onAddFavorite} 
//         />
//       ))}
//     </div>
//   );
// }

// export default MovieList;



//..............................................
import React from 'react';

const MovieList = ({ movies, onSelectMovie, onToggleFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h3 onClick={() => onSelectMovie(movie)}>{movie.title}</h3>
          <img src={movie.image} alt={movie.title} />
          <button onClick={() => onToggleFavorite(movie)}>
            {movie.isFavorite ? 'Unfavorite' : 'Favorite ❤️'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;