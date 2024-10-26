import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Counter from './counter/Counter';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Counter />
        </Provider>
    </div>
  );
}

export default App;
