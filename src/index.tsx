import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Background body of app
document.body.style.background = '#f1f1f1';

root.render(
  // Includo il componente Provider a cui passo lo store in questo modo sarà disponibile in tutta la app
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
