import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/register" element={ <FormProvider><Login /></FormProvider> } />
        <Route path="/register" element={ <FormProvider><Resgister /></FormProvider> } />
      </Routes>
    </main>
  );
}

export default App;
