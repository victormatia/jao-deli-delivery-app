import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';
import Products from './pages/Products';
import Admin from './pages/Admin';

function App() {
  return (
    <main className="App">
      <FormProvider>
        <Routes>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Resgister /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/admin/manage" element={ <Admin /> } />
        </Routes>
      </FormProvider>
    </main>
  );
}

export default App;
