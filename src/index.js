import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './watchstore_manhduc/Component/Main.js';
import reportWebVitals from './reportWebVitals.js';
import  EntireProduct from '../src/watchstore_manhduc/Component/EntireProduct.js'
import ProductDetail from '../src/watchstore_manhduc/Component/ProductDetail.js'
import Login from '../src/watchstore_manhduc/Component/Login.js'
import InfoUser from './watchstore_manhduc/Component/InfoUser.jsx';
import Secondhand from './watchstore_manhduc/Component/Secondhand.js';
import Contact from './watchstore_manhduc/Component/Contact.js';
import Register from './watchstore_manhduc/Component/Register.js';
import { CartProvider } from './watchstore_manhduc/Component/CartContext';
import Cart from './watchstore_manhduc/Component/Cart.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
      <Routes>
        <Route path='/' element= {<App />}/>
        <Route path='/homepage' element={<App />}/>
        <Route path="/entireproduct" element={<EntireProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path="/watch_detail/:id" element={<ProductDetail />} />
        <Route path="/secondhand" element={<Secondhand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/infouser/:id" element={<InfoUser />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
