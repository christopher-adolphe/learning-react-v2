import React, { useState } from 'react';

import config from './config.json';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [ movies, setMovies ] = useState([]);

  const handleFetchMovies = async () => {
    // fetch(config.apiEndpoint)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('data: ', data);
    //     setMovies(data.results)
    //   })
    //   .catch(error => console.log(error));

    try {
      const response = await fetch(config.apiEndpoint);
      const { results: movies } = await response.json();

      const transformedMovies = movies.map(movie => ({
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }));

      setMovies(transformedMovies);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={ handleFetchMovies }>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={ movies } />
      </section>
    </React.Fragment>
  );
}

export default App;
