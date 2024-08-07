import React, { useState, useEffect } from 'react';
import './App.css';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import MainContent from './MainBody/MainContent';
import DialogBox from './DialogBox/DialogBox';
import CrudFunctions from './Utils/Crud';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

 const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : false;
  });

  const handleToggle = () => {
    setIsDarkMode((prevMode : boolean) => !prevMode);
  };

useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }, [isDarkMode]);

 
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleDeleteClick = () => {
    setIsDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setIsDialogVisible(false);
  };

  const {
    selectedDocIndex,
    setSelectedDocIndex,
    addDocument,
    documents,
    setDocuments,
    updateDocument,
    updateDocName,
    saveDocument,
    deleteDocument,
    renderMarkdown,
    handleKeyDown,
    markdownTextareaRef 
  } = CrudFunctions();

  const handleDeleteDocument = () => {
    if (selectedDocIndex === null) {
      console.error("No document selected to delete");
      return;
    }
    deleteDocument(selectedDocIndex);
  };

  const handleSaveClick = () => {
   if (selectedDocIndex === null) {
     addDocument();
     return;
   }
   const currentDocument = documents[selectedDocIndex];
   if (!currentDocument) {
     console.error('Selected document does not exist.');
     return;
   }
   saveDocument(selectedDocIndex, currentDocument.content, currentDocument.name)
  };

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <SideBar isSidebarVisible={isSidebarVisible}
          
          isDarkMode={ isDarkMode } handleToggle={ handleToggle }
          documents={documents}
          setSelectedDocIndex={setSelectedDocIndex}
          selectedDocIndex={selectedDocIndex}
          addDocument={addDocument}
          toggleSidebar={toggleSidebar}
        />
        {isDialogVisible && <DialogBox isDarkMode={isDarkMode} name={selectedDocIndex !== null ? documents[selectedDocIndex]?.name || '' : ''} deleteDocument={handleDeleteDocument} selectedDocIndex={selectedDocIndex} onClose={handleCloseDialog} />}
        <Header isSidebarVisible={isSidebarVisible} 
         toggleSidebar={toggleSidebar}
         handleDeleteClick={handleDeleteClick}
         name={selectedDocIndex !== null ? documents[selectedDocIndex]?.name || '' : ''}
         selectedDocIndex={selectedDocIndex}
         updateDocName={(selectedDocIndex, updatedName) => updateDocName(selectedDocIndex, updatedName)}
         saveDocument={handleSaveClick}
         handleKeyDown={handleKeyDown}
        />
        <MainContent isSidebarVisible={ isSidebarVisible } isDarkMode={ isDarkMode }
        content={selectedDocIndex !== null ? documents[selectedDocIndex]?.content || '' : ''}
        selectedDocIndex={selectedDocIndex}
        updateDocument={(updatedContent) => updateDocument(updatedContent)}
        renderMarkdown = {renderMarkdown}
        markdownTextareaRef={markdownTextareaRef}
      />
      </div>
    </>
  );
}

export default App;
