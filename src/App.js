import React from 'react';
import Planets from './Pages/Planets';
import StarWarsProvider from './Context/StarWarsProvider';
import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <Planets />
    </StarWarsProvider>
  );
}

export default App;
