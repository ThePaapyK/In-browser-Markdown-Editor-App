import React from 'react';
import { SideBarDiv, TitleDiv, NewDocButton } from './SideBarStyles';
import Icon_document from './assets/icon-document.svg';

interface SidebarProps {
  isSidebarVisible: boolean;
}

export default function SideBar({ isSidebarVisible }: SidebarProps) {
  return (
    <SideBarDiv isvisible={isSidebarVisible}>
      <TitleDiv>
        <p>MY DOCUMENTS</p>
      </TitleDiv>
      <NewDocButton>
        <p>+ New Document</p>
      </NewDocButton>
    </SideBarDiv>
  );
};
