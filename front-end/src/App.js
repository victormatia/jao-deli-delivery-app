import React from 'react';
import './App.css';
import Resgister from './pages/Resgister';
import FormProvider from './context/FormProvider';

function App() {
  return (
    <main className="App">
      <FormProvider>
        <Resgister />
      </FormProvider>
    </main>
  );
}

export default App;
