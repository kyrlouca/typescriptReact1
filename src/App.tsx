import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainGrid from './components/MainGrid';
import Store from './storage/Store';

const App: React.FC = () => {
  return (
    <Store>
      <BrowserRouter>
        <MainGrid />
      </BrowserRouter>
    </Store>
  );
};

export default App;
