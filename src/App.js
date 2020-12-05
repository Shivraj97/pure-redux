import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

const initialState = {
  count: 0,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
console.log('created', store.getState());
console.log('done', store.getState());

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
