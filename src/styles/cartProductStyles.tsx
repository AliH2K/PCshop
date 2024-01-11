import styled from 'styled-components';

export const CartProductComp = styled.div`
  display: flex;
  align-items: center;
  height: 20%;
  font-weight: bold;
  border: 1px solid gray;
  border-left: none;
  border-right: none;
  font-size: min(2vw, 2vh);
`;

export const CartImageComp = styled.img`
  width: 20%;
  height: 100%;
  object-fit: contain;
  flex: 1;
`;

export const CartItemChangeComp = styled.h3`
  display: flex;
  align-items: center;
  width: 15%;
  justify-content: space-between;
  flex: 1;

  & button {
    color: rgb(204, 0, 0);
  }
`;

export const CartQuanChangeBtnComp = styled.button`
  height: 100%;
  width: 20%;
  border: none;
  background-color: inherit;
  color: black;
  transform: scale(1.5);

  &:hover {
    cursor: pointer;
  }
`;

export const DeleteFromCartBtnComp = styled.button`
  border: none;
  background-color: rgb(204, 0, 0);
  width: auto;
  height: 20%;
  border-radius: 50px;
  cursor: pointer;
  margin-right: 20px;
  font-family: 'Montserrat';
`;
