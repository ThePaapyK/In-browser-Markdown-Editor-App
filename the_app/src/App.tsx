import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import SideBar from './SideBar';
import MainContent from './MainContent';
import DialogBox from './DialogBox';

function App() {
   const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

 const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleDeleteClick = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <SideBar isSidebarVisible={isSidebarVisible}
          isChecked={ isChecked } handleToggle={ handleToggle }  />
        {isDialogVisible && <DialogBox isChecked={isChecked} onClose={handleCloseDialog} />}
        <Header isSidebarVisible={isSidebarVisible} 
         toggleSidebar={toggleSidebar}
         handleDeleteClick={handleDeleteClick} />
        <MainContent isSidebarVisible={ isSidebarVisible } isChecked={ isChecked } />
      </div>
    </>
  );
}

export default App;
