import { Header, Footer } from './partials';
import { Home } from './pages';

import styles from './App.module.css';

function App() {
  return (
    <div className={ styles.app }>
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
