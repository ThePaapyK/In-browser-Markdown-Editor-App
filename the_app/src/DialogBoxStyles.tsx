import styled from 'styled-components';

const Overlay = styled.div<{ischeck: boolean}>`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.ischeck ? 'rgba(124, 129, 135, 0.5)' : 'rgba(21, 22, 25, 0.5)'};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogBox = styled.div<{ischeck: boolean}>`
  font-family: 'Roboto Slab', sans-serif;
  background: ${props => props.ischeck ? '#1D1F22' : '#FFFFFF' };
  padding: 24px;
  width: 343px;
  height: 218px;
  border-radius: 5px;
  
  button {
    color: #FFFFFF;
    background: #E46643;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    &:hover {
      background: #F39765;
    }
  }
`;

const HeadingP = styled.p<{ischeck : boolean}>`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.ischeck ? '#FFFFFF' : '#35393F'};
  margin: 0;
  text-align: left;
`;

const MessageP = styled.div<{ischeck: boolean}>`
  font-size: 14px;
  color: ${props => props.ischeck ? '#C1C4CB' : '#7C8187'};
  margin: 24px 0 24px 0;
  text-align: left;
  height: 55.2px;

  .delName {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
    white-space: nowrap;
    vertical-align: top;
  }
`;

export { Overlay, DialogBox, MessageP, HeadingP };
