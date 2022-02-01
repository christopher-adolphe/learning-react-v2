import SimpleInput from './components/SimpleInput';
import SimpleInputV2 from './components/SimpleInputV2';

function App() {
  return (
    <div className="app">
      <h3>Managing form via state</h3>

      <SimpleInput />

      <br/>
      <hr/>

      <h3>Managing form via custom hook</h3>

      <SimpleInputV2 />
    </div>
  );
}

export default App;
