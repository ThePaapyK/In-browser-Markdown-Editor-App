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

 @media (max-width: 480px) {
      height:  calc( 100vh - 56px);
    }
`;

const MarkdownDiv = styled.div<{ispreview: boolean}>`
  text-align: left;
  vertical-align: top;
  display: ${({ispreview}) => (ispreview ? 'none' : 'inline-block')};
  width: 50%;
  min-height: calc( 100vh - 72px);
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
`;

const TopBarDiv = styled.div<{ischecked: boolean}>`
    height: 42px;
    width: 100%;
    background-color: ${({ ischecked }) => (ischecked ? '#1D1F22' : '#F5F5F5')};
    color: #7C8187;
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

const PreviewDiv = styled.div<{ispreview: boolean}>`
 text-align: left;
 display: inline-block;
 min-height: calc( 100vh - 72px);
 vertical-align: top;
 width: ${({ispreview}) => (ispreview ? '100%' : 'calc(50% - 2px)')};

 @media (max-width: 480px) {
      min-height:  calc( 100vh - 56px);
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
