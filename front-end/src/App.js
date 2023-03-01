import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route
          extact
          path="/register"
          element={
            <FormProvider>
              <Resgister />
            </FormProvider>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
