/* eslint-disable import/no-extraneous-dependencies */
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter basename="/music-app">
        <App />
      </BrowserRouter>
    </Provider>
);
