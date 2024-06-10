import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import SideBar from './SideBar';

function App() {
   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <SideBar isSidebarVisible={isSidebarVisible} />
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      </div>
    </>
  );
}

export default App;
