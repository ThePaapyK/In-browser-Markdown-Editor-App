import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';

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
        <MainContent isSidebarVisible={ isSidebarVisible } />
      </div>
    </>
  );
}

export default App;
