import styled from 'styled-components';

const HeaderDiv = styled.div<{ sidebarvisible: boolean }>`
  background: #2B2D31;
  display: flex;
  align-items: center;
  height: 72px;
  z-index: 1000;
  margin-left: ${({ sidebarvisible }) => (sidebarvisible ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
  width: 100%;
  overflow: hidden;

 @media (max-width: 480px) {
    height: 56px;
  }

`;

const MenuButton = styled.button`
  background: #35393F;
  border: none;
  height: inherit;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  @media (max-width: 480px) {
    width: 56px;
  }
`;

const MarkP = styled.div`
  color: #ffffff;
  margin: 0 24.75px 0 24.75px;
 
  @media (max-width: 768px) {
    display: none;
  }
`;

const VertLine = styled.div`
  border-left: 1px solid #5A6069;
  height: 40px;
  
  @media (max-width: 1024px) {
    display: none;
  }
`;

const DocumentName = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  height: 36px;
  width: 128px;
  gap: 14px;
  img {
    height: 16px;
    width: 13.7px;
  }
`;

const DocNForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  color: #7C8187;
  font-size: 13px;
  font-weight: 300;
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  caret-color: #E46643;
  &:hover,
  &:focus {
    border-bottom: 2px solid #ccc;
    outline: none;
 }
 @media (max-width: 480px) {
    width: 140px;
  }
`;

const DelSave = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;

const DelButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  img {
    height: 20px;
    width: 18px;
  }
`;

const SaveButton = styled.button`
  background: #E46643;
  color: #ffffff;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 5px;
  font-family: 'Roboto'; sans-serif;
  font-weight: 400;
  height: 40px;
  width: 152px;
  cursor: pointer;
  font-size: 15px;
  border: none;
  
  &:hover {
    background: #F39765;
  }

  img {
   height: 16px;
   width: 16px;
  }

  @media (max-width: 480px) {
    width: 40px;
  }

  p {
    @media (max-width: 480px) {
      display: none;
    }
  }

   
`;


export { HeaderDiv, MenuButton, MarkP, VertLine, DocumentName, DocNForm, Label, Input, DelSave, SaveButton, DelButton };
