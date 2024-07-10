import styled from 'styled-components';

interface MainStylesProps {
  sidebarVisible: boolean;
  ischecked: boolean;
}

const MainBodyDiv = styled.div<MainStylesProps>`
 margin-left: ${({ sidebarVisible }) => (sidebarVisible ? '250px' : '0')};
 transition: margin-left 0.3s ease-in-out;
 width: 100%;
 margin-top: auto;
 position: relative;
 height: calc( 100vh - 72px);
 text-align: left;
 background-color: ${({ ischecked }) => (ischecked ? '#151619' : '#FFFFFF')};
 overflow: hidden;
 
 @media (min-width: 769px)
 {
   ::-webkit-scrollbar {
    width: 8.5px;
   }

   ::-webkit-scrollbar-track {
    background: ${({ ischecked }) => (ischecked ? '#1D1F22' : '#FFFFFF')}
   }

   ::-webkit-scrollbar-thumb {
     background:  ${({ ischecked }) => (ischecked ? '#C1C4CB' : '#7C8187')};
     border-radius: 20px;
     cursor: pointer;
   }
}

 @media (max-width: 480px) {
      height:  calc( 100vh - 56px);
    }
`;

const MarkdownDiv = styled.div<{ispreview: boolean, ischecked: boolean}>`
  text-align: left;
  vertical-align: top;
  display: ${({ispreview}) => (ispreview ? 'none' : 'inline-block')};
  width: 50%;
  height: calc( 100vh - 72px);
  margin-right: auto;

  @media (max-width: 480px) {
      width: 100%;
      min-height:  calc( 100vh - 56px);
    }

  button {
    display: none;

    @media (max-width: 480px) {
      display: inline;
    }
  }
  
  textarea {
    width: 100%;
    height: calc(100vh - 114px);
    border: none;
    padding: 16px;
    line-height: 24px;
    outline: none;
    resize: none;
    font-family: 'Roboto Mono' monospace;
    font-size: 14px;
    color: ${({ischecked}) => (ischecked ? '#C1C4CB' : '#35393F')};
    background: transparent;
  }
`;

const TopBarDiv = styled.div<{ischecked: boolean}>`
    height: 42px;
    width: 100%;
    background-color: ${({ ischecked }) => (ischecked ? '#1D1F22' : '#F5F5F5')};
    color: ${({ ischecked }) => (ischecked ? '#C1C4CB' : '#7C8187')};
    display: inline-block;
    padding:13px 0 0 15px;
    overflow: hidden;

    p {
      margin: 0;
      font-size: 14px;
      float: left;
    }
`;

const Vertline = styled.div<{ ischecked: boolean, ispreview: boolean}>`
  border: none;
  border-left: ${({ ischecked }) => (ischecked ? '2px solid #5A6069' : '2px solid #E4E4E4')};
  display: ${prop => prop.ispreview ? 'none' : 'inline-block'};
  min-height: calc( 100vh - 70px);
  margin-left: auto;
`;

const PreviewDiv = styled.div<{ispreview: boolean, ischecked: boolean}>`
  text-align: left;
  display: inline-block;
  height: calc( 100vh - 72px);
  vertical-align: top;
  line-height: 24px;
  width: ${({ispreview}) => (ispreview ? '100%' : 'calc(50% - 2px)')};

  .preview {
    width: 100%;
    height: calc(100vh - 114px);
    overflow-Y: auto;
    margin: 0;
    padding: 0 24px 48px 24px;
    
    @media (max-width: 480px) {
     padding: 0 16px 16px 16px;
    }
  }
/* .preview::-webkit-scrollbar {
    display: none;
  }*/

  .content {
    max-width: 672px;
    margin: auto;
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px;
    color: ${({ischecked}) => (ischecked ? '#C1C4CB' : '#7C8187')};
    height: auto;
    padding: 0;
    
    li {
    margin-bottom: 5px;
    }
    ul li::marker {
      color: #E46643;
    }

    h1, h2, h3, h4, h5 {
    color: ${({ischecked}) => (ischecked ? '#FFFFFF' : '#35393F')};
    margin: 24px 0 24px 0;
    line-height: 1.2;
    
    }
    h5 {
      font-size: 16px;
    }
    h3 {
      font-size: 24px;
    }
    h1 {
      font-size: 32px;
    }    
    h4 {
      font-size: 20px;
    }
    h2 {
      font-weight: 300;
      font-size: 28px;
    }
    h6 {
      color: #E46643;
      font-size: 14px;
      margin: 24px 0 24px 0;
      line-height: 1.2;
    }
    
    a {
       color: #35393F;
    }

    blockquote {
      background: ${({ischecked}) => (ischecked ? '#2B2D31' : '#F5F5F5')};
      padding: 10px 20px 10px 20px;
      border-left: 4px solid #E46643;
      border-radius: 5px;
      color: ${({ischecked}) => (ischecked ? '#FFFFFF' : '#35393F')};
      font-weight: bold;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      a {
        color: inherit;
      }
    }
    pre {
      background: ${({ischecked}) => (ischecked ? '#2B2D31' : '#F5F5F5')};
      padding: 24px;
      border-radius: 5px;
    }
    code {
      color: ${({ischecked}) => (ischecked ? '#FFFFFF' : '#35393F')};
      font-family: 'Roboto Mono', monospace;
      white-space: pre-wrap;
    }
  }

 @media (max-width: 480px) {
      height:  calc( 100vh - 56px);
    }
 
`;

const PreviewButton = styled.button`
  float: right;
  border: none;
  margin-right: 20px;
  background: transparent;
  height: 16px;
  cursor: pointer;
  
`;


export { MainBodyDiv, MarkdownDiv, PreviewDiv, TopBarDiv, Vertline, PreviewButton };
