import React from 'react';
import Icon_menu from '../assets/icon-menu.svg';
import Icon_document from '../assets/icon-document.svg';
import Icon_delete from '../assets/icon-delete.svg';
import Icon_save from '../assets/icon-save.svg';
import Icon_close from '../assets/icon-close.svg';
import Markdown from '../assets/MARKDOWN.svg';
import { HeaderDiv, MenuButton, MarkP, VertLine, DocumentName, DocNForm, Label, Input, DelSave, SaveButton, DelButton } from './HeaderStyles';


interface HeaderProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
  handleDeleteClick: () => void;
  name: string;
  saveDocument: () => void;
  updateDocName: (index: number, updatedName: string) => void;
  selectedDocIndex: number | null;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

export default function Header({ isSidebarVisible, toggleSidebar, handleDeleteClick, name, updateDocName, selectedDocIndex,  saveDocument, handleKeyDown }: HeaderProps) {
  return (
    <HeaderDiv sidebarvisible={isSidebarVisible}>
      <MenuButton onClick={toggleSidebar}>
        { isSidebarVisible ?
          <img src={ Icon_close } alt="menu icon" />
        :
          <img src={ Icon_menu } alt="close icon" />
        }
      </MenuButton>
      <MarkP><img src={ Markdown } alt="Markdown Logo"/></MarkP>
      <VertLine />
      <DocumentName>
        <img src={ Icon_document } alt="document icon" />
        <DocNForm onSubmit={handleFormSubmit}>
          <Label htmlFor="docName">Document Name</Label>
          <Input
            id="docName"
            type="text"
            value={name}
            onChange={(e) => {
              if (selectedDocIndex !== null) {
                updateDocName(selectedDocIndex, e.target.value);
              } else {
                alert("add a new document first");
              }
          }}
          onKeyDown={handleKeyDown}
          />
        </DocNForm>
      </DocumentName>
      <DelSave>
        <DelButton onClick={handleDeleteClick}>
          <img src={ Icon_delete } alt="delete icon" />
        </DelButton>
        <SaveButton onClick={saveDocument}>
          <img src={ Icon_save } alt="save icon" />
          <p>Save Changes</p>
        </SaveButton>
      </DelSave>
    </HeaderDiv>
  );
};
