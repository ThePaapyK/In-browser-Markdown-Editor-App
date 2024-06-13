import React, { useState, useEffect } from 'react';
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

 const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <SideBar isSidebarVisible={isSidebarVisible} isChecked={ isChecked } handleToggle={ handleToggle }  />
        <Header isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <MainContent isSidebarVisible={ isSidebarVisible } isChecked={ isChecked } />
      </div>
    </>
  );
}

export default App;
