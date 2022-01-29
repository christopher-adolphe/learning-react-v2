import React, { useState, useEffect, useCallback } from 'react';

import config from './config.json';

import AddMovie from './components/AddMovie';
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
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const handleFetchMovies = useCallback(async () => {
    // fetch(config.apiEndpoint)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('data: ', data);
    //     setMovies(data.results)
    //   })
    //   .catch(error => console.log(error));
    let response;

    try {
      setIsLoading(true);
      setError(null);
      
      response = await fetch(config.apiEndpoint);
      
      if (!response.ok) {
        throw new Error('Something went wrong while fetching movies.');
      }

      const data = await response.json();

      const transformedMovies = Object.keys(data).map(key => ({
        id: key,
        title: data[key].title,
        releaseDate: data[key].releaseDate,
        openingText: data[key].openingText
      }));

      setMovies(transformedMovies);
    } catch (error) {
      console.log(error);
      handleHttpError(response.status);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleAddMovie = async (movie) => {
    console.log('handleAddMovie called...', movie);
    let response;

    try {
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Something went wrong while adding new movie.')
      }

      const data = await response.json();
      console.log('response data: ', data);
    } catch (error) {
      console.log(error);
      handleHttpError(response.status);
    }
  };

  const handleHttpError = (statusCode) => {
    switch (statusCode) {
      case 400:
        setError('BAD REQUEST! The server could not process the request due to malformed request syntax.')
        break;

      case 401:
        setError('UNAUTHORIZED! The request has not been applied because it lacks valid authentication credentials.')
        break;

      case 403:
        setError('FORBIDDEN! The server could not authorize access requested resource.')
        break;

      case 404:
        setError('NOT FOUND! The server could not find a current representation for the requested resource.')
        break;
    
      default:
        break;
    }
  };

  const handleContent = () => {
    if (isLoading && !movies.length) {
      return (<p>Loading...</p>);
    }

    if (error) {
      return (<p>{ error }</p>);
    }

    if (!isLoading && !movies.length && !error) {
      return (<p>No movies loaded.</p>);
    }

    if (movies.length) {
      return (<MoviesList movies={movies} />);
    }
  };

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={ handleAddMovie } />
      </section>

      <section>
        <button onClick={ handleFetchMovies }>Fetch Movies</button>
      </section>

      <section>{ handleContent() }</section>
    </React.Fragment>
  );
}

export default App;
