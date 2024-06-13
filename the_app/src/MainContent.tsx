import React, { useState } from 'react';
import { MainBodyDiv, MarkdownDiv, PreviewDiv, TopBarDiv, Vertline, PreviewButton } from './MainContentStyles';
import Icon_hide from './assets/icon-hide-preview.svg';
import Icon_show from './assets/icon-show-preview.svg';

interface MainProps {
  isSidebarVisible: boolean;
  isChecked: boolean;
}

export default function MainContent({ isSidebarVisible, isChecked } : MainProps) {

 const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <MainBodyDiv sidebarVisible={isSidebarVisible} ischecked={isChecked}>
      <MarkdownDiv ispreview={isPreview}>
        <TopBarDiv ischecked={isChecked}>
          <p>MARKDOWN</p>
        </TopBarDiv>
      </MarkdownDiv>
      <Vertline ischecked={isChecked} ispreview={isPreview} />
      <PreviewDiv ispreview={isPreview}>
        <TopBarDiv ischecked={isChecked}>
          <p>PREVIEW</p>
          <PreviewButton onClick={togglePreview}>
            { isPreview ?
            <img src={Icon_hide} alt="hide preview icon" />
            :
            <img src={Icon_show} alt="show preview icon" />
            }
          </PreviewButton>
        </TopBarDiv>
      </PreviewDiv>
    </MainBodyDiv>
  );
};
