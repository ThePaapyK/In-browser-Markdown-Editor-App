import styled from 'styled-components';

const HeaderDiv = styled.div`
  background: #2B2D31;
  height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MenuIcon = styled.div`
  background: #35393F;
  height: 72px;
  width: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarkP = styled.p`
  color: #ffffff;
  margin: 0 24.75px 0 24.75px;
`;

const VertLine = styled.div`
  border-left: 1px solid #5A6069;
  height: 40px;
`;

const DocumentName = styled.div`
  display: flex;
  padding-left: 25px;
  height: 36px;
  width: 128px;
  display: flex;
  align-items: center;
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
  color: #7C8187;
  font-size: 13px;
  font-weight: 450;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 15px;
  caret-color: #E46643;
  &:hover,
  &:focus {
    border-bottom: 2px solid #ccc;
    outline: none;
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
`;


export { HeaderDiv, MenuIcon, MarkP, VertLine, DocumentName, DocNForm, Label, Input, DelSave, SaveButton, DelButton };
