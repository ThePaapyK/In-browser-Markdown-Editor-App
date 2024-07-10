import React, { useState } from 'react';
import { marked } from 'marked';
import { MainBodyDiv, MarkdownDiv, PreviewDiv, TopBarDiv, Vertline, PreviewButton } from './MainContentStyles';
import Icon_hide from '../assets/icon-hide-preview.svg';
import Icon_show from '../assets/icon-show-preview.svg';

interface MainProps {
  isSidebarVisible: boolean;
  isDarkMode: boolean;
  content: string;
  selectedDocIndex: number | null;
  updateDocument: ( content: string) => void;
  renderMarkdown: (content: string) => string | Promise<string>;
}

export default function MainContent({ isSidebarVisible, isDarkMode, selectedDocIndex,  content, renderMarkdown, updateDocument } : MainProps) {

 const [isPreview, setIsPreview] = useState(false);

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  return (
    <MainBodyDiv sidebarVisible={isSidebarVisible} isdarkmode={isDarkMode}>
      <MarkdownDiv ispreview={isPreview} isdarkmode={isDarkMode}>
        <TopBarDiv isdarkmode={isDarkMode}>
          <p>MARKDOWN</p>
          <PreviewButton onClick={togglePreview}>
            { isPreview ?
            <img src={Icon_hide} alt="hide preview icon" />
            :
            <img src={Icon_show} alt="show preview icon" />
            }
          </PreviewButton>
        </TopBarDiv>
        <textarea
          value={content}
          onChange={(e) => {
            if (selectedDocIndex !== null) {
              updateDocument(e.target.value);
            } else {
              alert("add a New Document fist");
           }
          }}
        />
      </MarkdownDiv>
      <Vertline isdarkmode={isDarkMode} ispreview={isPreview} />
      <PreviewDiv ispreview={isPreview} isdarkmode={isDarkMode}>
        <TopBarDiv isdarkmode={isDarkMode}>
          <p>PREVIEW</p>
          <PreviewButton onClick={togglePreview}>
            { isPreview ?
            <img src={Icon_hide} alt="hide preview icon" />
            :
            <img src={Icon_show} alt="show preview icon" />
            }
          </PreviewButton>
        </TopBarDiv>
        <div className="preview">
          <div>
            <div className="content"
          dangerouslySetInnerHTML={{__html: (renderMarkdown(content)).toString()}}
            />
          </div>
        </div>
      </PreviewDiv>
    </MainBodyDiv>
  );
};
