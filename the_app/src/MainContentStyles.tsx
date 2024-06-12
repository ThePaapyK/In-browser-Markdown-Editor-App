import styled from 'styled-components';


const MainBodyDiv = styled.div<{ sidebarVisible: boolean }>`
 margin-left: ${({ sidebarVisible }) => (sidebarVisible ? '250px' : '0')};
 transition: margin-left 0.3s ease-in-out;
 width: 100%;
 margin-top: auto;
 position: relative;
 min-height: calc( 100vh - 70px);
 text-align: left;
`;

const MarkdownDiv = styled.div`
  text-align: left;
  vertical-align: top;
  display: inline-block;
  width: 50%;
  min-height: calc( 100vh - 70px);
  margin-right: auto;
 
  .topbar {
    height: 42px;
    width: 100%;
    display: inline-block;
    background-color: #F5F5F5;
    color: #7C8187;
    padding: 13px 0 0 15px;

     p {
      margin: 0;
      font-size: 14px;
    }
  }
`;

const Vertline = styled.div`
  border: none;
  border-left: 2px solid #E4E4E4;
  display: inline-block;
  min-height: calc( 100vh - 70px);
  margin-left: auto;
`;

const PreviewDiv = styled.div`
 text-align: left;
 display: inline-block;
 min-height: calc( 100vh - 70px);
 vertical-align: top;
 width: calc(50% - 2px);

 .topbar {
    height: 42px;
    width: 100%;
    background-color: #F5F5F5;
    color: #7C8187;
    display: inline-block;
    padding:13px 0 0 15px;
   
    p {
      margin: 0;
      font-size: 14px;
    }
  }
`;

export { MainBodyDiv, MarkdownDiv, PreviewDiv, Vertline };
