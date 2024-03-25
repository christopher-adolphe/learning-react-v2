import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  onAddToFavorites: (meetup) => {},
  onRemoveFromFavorites: (id) => {},
  onCheckIsFavorite: (id) => {}
});

FavoritesContext.displayName = 'FavoritesContext';

export function FavoritesContextProvider({ chidldren }) {
  const [ userfavorites, setUserFavorites ] = useState([]);

  const addToFavoritesHandler = (meetup) => {
    setUserFavorites(prevFavorites => [ ...prevFavorites, meetup ]);
  };

  const removeFromFavoritesHandler = (id) => {
    setUserFavorites(prevFavorites => prevFavorites.filter(favorite => favorite.id !== id));
  };

  const isFavoriteHandler = (id) => {
    return userfavorites.some(meetup => meetup.id === id);
  };

  const contextValue = {
    favorites: userfavorites,
    onAddToFavorites: addToFavoritesHandler,
    onRemoveFromFavorites: removeFromFavoritesHandler,
    onCheckIsFavorite: isFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={ contextValue }>
      { chidldren }
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
