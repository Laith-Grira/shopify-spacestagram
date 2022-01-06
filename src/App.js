import { useEffect, useState } from 'react';
import NasaPicture from './components/NasaPicture';
import axios from 'axios';
import NasaPicturesGrid from './components/NasaPicturesGrid';
import './App.scss';


function App() {

  return (
    <div className="App">
      <h1>Starting project</h1>
      <NasaPicturesGrid />
    </div>
  );
}

export default App;
