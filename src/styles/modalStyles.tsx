import styled from 'styled-components';

export const CountComp = styled.div`
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 70%;
  text-align: center;
  background-color: rgb(204, 0, 0);
  border-radius: 50%;
  transform: scale(0.9);
  font-weight: bold;
`;

export const OverlayComp = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgb(0, 0, 0, 80%);
  backdrop-filter: blur(2px);
  z-index: 1;
  top: 0;
  left: 0;
`;

export const ModalComp = styled.div<{ 'data-show': boolean }>`
  ${(props) => (props['data-show'] ? `` : `transform: translateY(-100%);`)}
  height: 70vh;
  width: max(60vw, 70vh);
  max-width: 100vw;
  background-color: rgb(255, 255, 255, 80%);
  border-radius: 0 0 10px 10px;
  transition: transform 0.3s 0s ease-in-out;
  z-index: 2;
  position: absolute;
  top: 0;
  color: black;
  text-align: center;
  overflow: auto;
`;

export const CloseModalComp = styled.button`
  position: absolute;
  right: 0;
  width: 8%;
  height: 8%;
  border: none;
  font-size: 1.5rem;
  color: rgb(204, 0, 0);
  background-color: unset;
  cursor: pointer;
  font-weight: bold;
`;

export const CheckoutBtnComp = styled.button`
  border: solid 1px gray;
  background-color: rgb(44, 231, 69);
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  margin: 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Montserrat';
`;

export const NoItemsComp = styled.h1`
  position: absolute;
  width: 50%;
  left: 25%;
  top: 25%;
  text-align: center;
`;
