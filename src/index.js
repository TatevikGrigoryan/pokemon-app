import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './assets/main.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import NotFound from './layouts/NotFound'
import store from './store'
import PokemonList from './pages/PokemonList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route index element={<PokemonList />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
