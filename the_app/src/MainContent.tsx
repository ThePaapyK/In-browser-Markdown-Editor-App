import React from 'react';
import { MainBodyDiv, MarkdownDiv, PreviewDiv, Vertline } from './MainContentStyles';
import Icon_hide from './assets/icon-hide-preview.svg';
import Icon_show from './assets/icon-show-preview.svg';

interface MainProps {
  isSidebarVisible: boolean;
}

export default function MainContent({ isSidebarVisible } : MainProps) {
  return (
    <MainBodyDiv sidebarVisible={isSidebarVisible}>
      <MarkdownDiv>
        <div className="topbar">
          <p>MARKDOWN</p>
        </div>
      </MarkdownDiv>
      <Vertline / >
      <PreviewDiv>
        <div className="topbar">
          <p>PREVIEW</p>
        </div>
      </PreviewDiv>
    </MainBodyDiv>
  );
};
