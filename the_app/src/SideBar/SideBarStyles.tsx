import styled from 'styled-components';

const SideBarDiv = styled.div<{ isvisible: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 250px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isvisible }) => (isvisible ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100svh;
  background: #1D1F22;
  color:#ffffff;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  padding: 27px 24px 27px 24px;

  @media (min-width: 768px) {

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: inherit;
    }

    ::-webkit-scrollbar-thumb {
      background: #C1C4CB;
      border-radius: 20px;
    }
  }
`;

const MarkD = styled.img`
  display: none;
  text-align: left;
  margin: 2px 0 27px 0;

 @media (max-width: 768px) {
        display: block;
    }
 @media (max-width: 480px) {
    display: block;
    
 }
`;

const TitleP = styled.p`
  color: #7C8187;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  font-weight: 500;
  text-align: left;
  margin: 0 0 27px 0;
`;

const NewDocButton = styled.button`
  background: #E46643;
  font-family: 'Roboto', sans-serif;
  color: #ffffff;
  width: 202px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #F39765;
  };
`;

const ListedDiv = styled.div`
  height: calc(100svh - 210px);
  width: 100%;
  overflow-y: auto;
  margin-top: 24px;
`;
const ListedDocument = styled.div`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 36px;
  margin-bottom: 24px;
  overflow: hidden;
  max-width: 100%;
  
  img {
    margin-right: 16.29px;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .name {
    font-size: 15px;
    display: block;
    color: #FFFFFF;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    max-width: 170px;
    text-overflow: ellipsis;
  }
  .date {
    font-size: 13px;
    font-weight: 300;
    color: #7C8187;
    margin: 0;
  }
`;

const DarkLightDiv = styled.div`
  align-self: flex-start;
  margin: auto 0 0 0;
  display: flex;
  width: 104px;
  height: 24px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  
  .switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 48px;
  }

  .switch input {
  opacity: 0;
  width: 0;
  height: 0;
  }

  .switch .slider {
    background-color: #5A6069;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: .4s;
    transition: .4s;

    &::before {
      background-color: #fff;
      bottom: 6px;
      content: "";
      height: 12px;
      right: 6px;
      position: absolute;
      transition: .4s;
      -webkit-transition: .4s;
      width: 12px;
    }
  }

 .switch input:checked + .slider::before {
    transform: translateX(-24px);
    -webkit-transform: translateX(-24px);
    -ms-transform: translateX(-24px);
  }

  .switch .slider.round {
    border-radius: 14.5px;

    &::before {
      border-radius: 50%;
    }
  }
`;

const MoonImg = styled.img<{ ischeck : boolean }>`
  filter: ${({ ischeck } ) => (ischeck ? 'brightness(0) invert(1)' : 'none')};
  height: 16px;
  width: 16.46px;
`;

const SunImg = styled.img<{ ischeck : boolean }>`
  filter: ${({ ischeck } ) => (ischeck ? 'none' : 'brightness(0) invert(1)')};
`;

export { SideBarDiv, MarkD, TitleP, NewDocButton, ListedDiv, ListedDocument, DarkLightDiv, SunImg, MoonImg };
 
