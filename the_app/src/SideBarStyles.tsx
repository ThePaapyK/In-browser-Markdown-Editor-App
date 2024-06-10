import styled from 'styled-components';

const SideBarDiv = styled.div<{ isvisible: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 250px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isvisible }) => (isvisible ? 'translateX(0)' : 'translateX(-100%)')};
  min-height: 100vh;
  background: #1D1F22;
  color:#ffffff;
  flex-direction: column;
  align-items: center;
`;


const TitleDiv = styled.div`
  color: #7C8187;
  font-size: 14px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewDocButton = styled.button`
  background: #E46643;
  color: #ffffff;
  width: 202px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background: #F39765;
  };
`;

export { SideBarDiv, TitleDiv, NewDocButton };
  
