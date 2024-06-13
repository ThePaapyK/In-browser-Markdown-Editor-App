import React, { useState } from 'react';
import { SideBarDiv, TitleDiv, NewDocButton, DarkLightDiv, SunImg, MoonImg } from './SideBarStyles';
import Icon_document from './assets/icon-document.svg';
import Icon_dark from './assets/icon-dark-mode.svg';
import Icon_light from './assets/icon-light-mode.svg';

interface SidebarProps {
  isSidebarVisible: boolean;
  isChecked: boolean;
  handleToggle: () => void;
}

export default function SideBar({ isSidebarVisible, isChecked, handleToggle }: SidebarProps) {
 
  return (
    <SideBarDiv isvisible={isSidebarVisible}>
      <TitleDiv>
        <p>MY DOCUMENTS</p>
      </TitleDiv>
      <NewDocButton>
        <p>+ New Document</p>
      </NewDocButton>
      <DarkLightDiv>
       <MoonImg src={ Icon_dark } ischeck={isChecked} alt="dark mode icon" />
       <label className="switch" htmlFor="checkbox" >
         <input type="checkbox" checked={isChecked} onChange={handleToggle} id="checkbox" />
         <span className="slider round" />
       </label>
       <SunImg src={ Icon_light } ischeck={isChecked} alt="light mode icon" />
      </DarkLightDiv>
    </SideBarDiv>
  );
};
