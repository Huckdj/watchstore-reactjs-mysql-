import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes, Router, Switch} from 'react-router-dom';
import './index.css';
import App from './watchstore_manhduc/Component/Main.js';
import reportWebVitals from './reportWebVitals.js';
import  SalePage from '../src/watchstore_manhduc/Component/Sale.js'
import ProductDetail from '../src/watchstore_manhduc/Component/ProductDetail.js'
import Login from '../src/watchstore_manhduc/Component/Login.js'
import InfoUser from './watchstore_manhduc/Component/InfoUser.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<App />}/>
        <Route path='/homepage' element={<App />}/>
        <Route path="/sale" element={<SalePage />} />
          <Route path='/login' element={<Login />} />
          <Route path="/infoUser" component={InfoUser} />
        <Route path="/watch_detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
