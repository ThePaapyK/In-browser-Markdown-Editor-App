import React from 'react';
import { SideBarDiv, MarkD, TitleP, NewDocButton, ListedDiv, ListedDocument, DarkLightDiv, SunImg, MoonImg } from './SideBarStyles';
import Icon_document from '../assets/icon-document.svg';
import Icon_dark from '../assets/icon-dark-mode.svg';
import Icon_light from '../assets/icon-light-mode.svg';
import Markdown from '../assets/MARKDOWN.svg';


type Documente = {
  createdAt: string;
  name: string;
  content: string;
};

interface SidebarProps {
  isSidebarVisible: boolean;
  isDarkMode: boolean;
  handleToggle: () => void;
  toggleSidebar: () => void;
  documents: Documente[];
  setSelectedDocIndex: (index: number) => void;
  selectedDocIndex: number | null;
  addDocument: () =>void;
}

export default function SideBar({ isSidebarVisible, isDarkMode, handleToggle, toggleSidebar, documents, setSelectedDocIndex, selectedDocIndex, addDocument}: SidebarProps) {
 
  return (
    <SideBarDiv isvisible={isSidebarVisible}>
      <MarkD  src={Markdown} alt="Markdown logo" />
      <TitleP>
        MY DOCUMENTS
      </TitleP>
      <NewDocButton onClick={() => {addDocument(); toggleSidebar();}}>
        <p>+ New Document</p>
      </NewDocButton>
      <ListedDiv>
        {documents.map((doc, index) => (
          <ListedDocument key={index} onClick={() => {setSelectedDocIndex(index); toggleSidebar();}}>
            <img src={ Icon_document } alt="document icon" />
            <div className="details">
              <p className="date">{doc.createdAt}</p>
              <div className="name">{doc.name}</div>
            </div>
          </ListedDocument>
        ))}
      </ListedDiv>
      <DarkLightDiv>
       <MoonImg src={ Icon_dark } ischeck={isDarkMode} alt="dark mode icon" />
       <label className="switch" htmlFor="checkbox" >
         <input type="checkbox" checked={isDarkMode} onChange={handleToggle} id="checkbox" />
         <span className="slider round" />
       </label>
       <SunImg src={ Icon_light } ischeck={isDarkMode} alt="light mode icon" />
      </DarkLightDiv>
    </SideBarDiv>
  );
};
