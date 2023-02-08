import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'
import {Provider} from 'react-redux';
//import {store} from './store/index';
import store from './store/index.jsx'
import reportWebVitals from './reportWebVitals.jsx';
// import dotenv from "dotenv";
//  dotenv.config();


// axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";
let api = {
  backUrl: import.meta.env.VITE_BASE_URL,
};
axios.defaults.baseURL = api.backUrl || "http://localhost:3001";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
  
)
reportWebVitals();