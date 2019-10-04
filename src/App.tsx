import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainGrid from './components/MainGrid';
import Store from './storage/Store';

// const App: React.FC = () => {
const App= () => {
  return (
    <div>
      <Store>
      <BrowserRouter>
        <MainGrid />
      </BrowserRouter>
    </Store>
    </div>
  );
};

export default App;
