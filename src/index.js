import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from "@shopify/polaris";
import App from './App';
import en from '@shopify/polaris/locales/en.json';
import "@shopify/polaris/build/esm/styles.css";

ReactDOM.render(
  <AppProvider i18n={en} theme={{colorScheme: "light"}}>
    <App />
  </AppProvider>,
  document.getElementById('root')
);