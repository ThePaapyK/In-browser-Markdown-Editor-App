import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
