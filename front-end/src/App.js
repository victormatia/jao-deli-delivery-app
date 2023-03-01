import React from 'react';
import './App.css';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';

function App() {
  return (
    <main className="App">
      <FormProvider>
        <Login />
        <Resgister />
      </FormProvider>
    </main>
  );
}

export default App;
