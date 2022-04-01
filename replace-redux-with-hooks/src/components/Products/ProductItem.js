import React, { memo } from 'react';
// import { useDispatch } from 'react-redux';
// import { ProductsContext } from '../../context/productsContext';
import { useStore } from '../../hooks-store/store';

import Card from '../UI/Card';
import './ProductItem.css';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = memo(props => {
  console.log('Rendering ProductItem');
  // const dispatch = useDispatch();
  // const { onToggleFav } = useContext(ProductsContext)
  const dispatch = useStore(false)[1];

  const toggleFavHandler = () => {
    // dispatch(toggleFav(props.id));
    // onToggleFav(props.id);
    dispatch('TOGGLE_FAV', props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
