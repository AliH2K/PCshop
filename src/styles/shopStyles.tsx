import styled from 'styled-components';

export const ShopComp = styled.div<{ 'data-show': boolean }>`
  ${(props) =>
    props['data-show']
      ? ``
      : `
      opacity: 0;
      visibility: hidden;
      transform: scale(0.2) translateY(-300%);
  `}
  transition: all 0.8s 0s ease-in-out;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  position: absolute;
`;

export const ShopNavComp = styled.nav`
  background-color: #131313;
  height: 80px;
`;

export const ShopSecondNavComp = styled(ShopNavComp)`
  background-color: #131313;
  display: flex;
  height: 100%;
`;

export const NavbarComp = styled.div`
  display: flex;
  background-color: #131313;
  justify-content: end;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  height: 100%;
`;
