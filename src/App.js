import { useEffect, useState } from 'react';
import NasaPicture from './components/NasaPicture';
import axios from 'axios';
import NasaPicturesGrid from './components/NasaPicturesGrid';
import './App.scss';


function App() {

  return (
    <div>
      <header>
        <img src="https://www.smartenergydecisions.com/upload/images/company_images/shopify.png" alt="shopify-logo" />
        <h3>Shopify Summer 2022 Coding Challange</h3>
      </header>
      <div className="App mt-3">
        <span id='main-page-title'>Make Commerce Better for Everyone</span>
        <NasaPicturesGrid />
      </div>
    </div>
  );
}

export default App;
