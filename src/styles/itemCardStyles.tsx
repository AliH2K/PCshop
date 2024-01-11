import styled, { css } from 'styled-components';

export const PicContainerComp = styled.div`
  width: 100%;
  position: relative;
  height: 40%;
  overflow: hidden;
`;

export const PicComp = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const InfoComp = styled.div`
  font-size: large;
  font-weight: 700;
  width: 65%;
`;

export const AddRemoveComp = styled.div`
  width: 35%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-evenly;
`;

const cartActive = css`
  height: 100%;
  width: 20%;
  border: none;
  background-color: inherit;
  color: black;
`;

export const AddRemoveBtnComp = styled.button`
  ${cartActive}
  transform: scale(1.5);
  cursor: pointer;
`;

export const ItemQuantityComp = styled.span`
  ${cartActive}
  font-size: 1.4rem;
  font-weight: bold;
`;

export const AddCartBtnComp = styled.button`
  position: relative;
  width: 100px;
  height: 40px;
  background-color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: border-radius 0.3s 0s;

  &:hover {
    border-radius: 20px;
  }
`;

export const SpecsComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SpecsTextComp = styled.h1`
  text-align: center;
  margin: 0 15%;
  font-size: 170%;
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  border-radius: 50px 0;
`;

export const SpecsInfoComp = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 70%;
`;

export const SpecsNameComp = styled.h3`
  width: 40%;
`;
