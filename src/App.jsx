import Main from './views/Main.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

function App() {

  return (
      <Provider store={store}>
        <Main/>
      </Provider>
  )
}

export default App
