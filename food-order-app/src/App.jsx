import { Modal, Cart } from './components';
import { Header, Footer } from './partials';
import { Home } from './pages';

import styles from './App.module.css';

function App() {
  const cartItems = [
    { _id: 'm-1', title: 'Meal 1', price: 245.45 },
    { _id: 'm-2', title: 'Meal 2', price: 100.99 },
    { _id: 'm-3', title: 'Meal 3', price: 654.45 },
  ]
  return (
    <div className={ styles.app }>
      <Header />

      <Home />

      <Modal>
        <Cart items={ cartItems } />
      </Modal>

      <Footer />
    </div>
  );
}

export default App;
