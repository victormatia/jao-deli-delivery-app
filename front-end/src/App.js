import React from 'react';
// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import ProductsProvider from './context/ProductsProvider';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route
          path="/login"
          element={
            <FormProvider>
              <Login />
            </FormProvider>
          }
        />
        <Route
          path="/register"
          element={
            <FormProvider>
              <Resgister />
            </FormProvider>
          }
        />
        <Route
          path="/customer/products"
          element={
            <ProductsProvider>
              <Products />
            </ProductsProvider>
          }
        />
        <Route
          path="customer/checkout"
          element={
            <ProductsProvider>
              <Checkout />
            </ProductsProvider>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
