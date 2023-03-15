import React from 'react';
// import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import SellerOrders from './pages/SellerOrders';
import ProductsProvider from './context/ProductsProvider';
import CustomerOrders from './pages/CustomerOrders';
import DetailsSeller from './pages/DetailsSeller';

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
        <Route
          path="/admin/manage"
          element={
            <FormProvider>
              <Admin />
            </FormProvider>
          }
        />
        <Route
          path="/seller/orders"
          element={
            <SellerOrders />
          }
        />

        <Route
          path="/customer/orders"
          element={ <CustomerOrders /> }
        />
        <Route
          path="/customer/orders/:id"
          element={
            <CustomerOrders />
          }
        />
        <Route
          path="/seller/orders/:id"
          element={
            <ProductsProvider>
              <DetailsSeller />
            </ProductsProvider>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
