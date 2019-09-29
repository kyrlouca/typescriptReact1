import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainGrid from './components/MainGrid';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <MainGrid />
      </BrowserRouter>
    </div>
  );
};

export default App;
