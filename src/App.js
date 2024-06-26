// src/App.js
import React, { useState, useEffect } from 'react';
import moviesData from './moviesData';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleAddFavorite = (movie) => {
    setFavorites([...favorites, movie]);
  };

  const handleRemoveFavorite = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <MovieList 
        movies={filteredMovies} 
        onMovieSelect={setSelectedMovie} 
        onAddFavorite={handleAddFavorite} 
      />
      {selectedMovie && <MovieDetail movie={selectedMovie} />}
      <FavoriteMovies 
        favorites={favorites} 
        onRemoveFavorite={handleRemoveFavorite} 
      />
    </div>
  );
}

export default App;
