import React from 'react';
import HomePage from './Pages/HomePage';
import "./App.css"
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './component/ProductDetails';
// import Product_card from './Test/Product_card';


const App = () => {
  return (
    <Routes>
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='/' element={<HomePage />} />
    </Routes>

    // <Product_card />


  );
}

export default App;
