import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles.js';
import { FiltrosProvider } from './context/FiltrosContext'; // 👈 importa o context certinho

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FiltrosProvider> {/* 👈 envolve o App aqui */}
        <GlobalStyles />
        <App />
      </FiltrosProvider>
    </BrowserRouter>
  </React.StrictMode>
);