import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import Counter from './components/counter/Counter';
import TodoList from './components/toDoList/TodoList';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Counter />
          <TodoList />
        </Provider>
    </div>
  );
}

export default App;
