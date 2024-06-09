import React from 'react';
import Icon_menu from './assets/icon-menu.svg';
import Icon_document from './assets/icon-document.svg';
import Icon_delete from './assets/icon-delete.svg';
import Icon_save from './assets/icon-save.svg';
import { HeaderDiv, MenuIcon, MarkP, VertLine, DocumentName, DocNForm, Label, Input, DelSave, SaveButton, DelButton } from './HeaderStyles';

export default function Header() {
  return (
    <HeaderDiv>
      <MenuIcon>
        <img src={ Icon_menu } alt="menu icon" />
      </MenuIcon>
      <MarkP>MARKDOWN</MarkP>
      <VertLine />
      <DocumentName>
        <img src={ Icon_document } alt="document icon" />
        <DocNForm>
          <Label htmlFor="docName">Document Name</Label>
          <Input
            id="docName"
            type="text"
          />
        </DocNForm>
      </DocumentName>
      <DelSave>
        <DelButton>
          <img src={ Icon_delete } alt="delete icon" />
        </DelButton>
        <SaveButton>
          <img src={ Icon_save } alt="save icon" />
          Save Changes
        </SaveButton>
      </DelSave>
    </HeaderDiv>
  );
};
