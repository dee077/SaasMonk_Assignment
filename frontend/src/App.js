import React, { useState, useEffect  } from 'react';
import MovieList from './components/MovieList';
import AddMovieModal from './components/AddMovieModal';
import { getMovies, addMovie } from './services/api';
import Header from './components/Header';

function App() {
  const [movies, setMovies] = useState([]); // State to store movie list
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  // Handle adding a new movie
  const handleAddMovie = async (movieData) => {
    try {
      const newMovie = await addMovie(movieData); // Add movie through API
      setMovies([...movies, newMovie]); // Update state to include new movie
      console.log('Movie added successfully!');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <h1 className='mx-5 my-7 text-5xl text-gray-800'>The Best Movie Review Site!</h1>

      {/* Render the list of movies */}
      <MovieList movies={movies} />

      {/* Modal for adding new movie */}
      <AddMovieModal
        isOpen={showAddMovieModal}
        onClose={() => setShowAddMovieModal(false)}
        onSubmit={handleAddMovie}
      />
    </div>
  );
}

export default App;