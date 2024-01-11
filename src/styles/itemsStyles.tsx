import styled from 'styled-components';

export const SidePanelComp = styled.div`
  background-color: rgb(19, 19, 19);
  width: min(20vw, 20vh);
  height: 100%;
  padding-left: 2%;
  font-size: min(2vw, 2vh);
`;

export const PriceRangeComp = styled.p`
  cursor: pointer;
  margin: 20px 0;
  width: 160px;

  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`;

export const ItemsComp = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90%;
  overflow: auto;
  border-radius: 100px 0 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 4%;
  gap: 50px;
  padding-bottom: 100px;
`;

export const ItemComp = styled.div`
  width: 300px;
  height: auto;
  margin-bottom: 90px;
  color: #000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  border-top: 3px solid #000;
  border-bottom: 3px solid #000;
  border-radius: 10px;
  row-gap: 2%;
  padding: 1% 0;
`;
