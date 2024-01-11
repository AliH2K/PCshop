import styled from 'styled-components';

export const HomeComp = styled.div<{ 'data-show': boolean }>`
  ${(props) => (props['data-show'] ? `` : `display: none;`)}
  position: absolute;
  z-index: 0;
  background-image: url('./src/resources/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

export const BrandComp = styled.h1`
  margin: 0;
  padding: 4% 0 0 4%;
  display: inline-block;
  position: absolute;
  font-size: 3vh;
  font-weight: 300;
`;

export const IntroComp = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  flex-wrap: wrap;
`;

export const CtaComp = styled.div<{ 'data-show': boolean }>`
  ${(props) =>
    props['data-show']
      ? ``
      : `
        transform: translateX(-100%);
        visibility: hidden;
        opacity: 0;
    `}
  transition: all 0.8s 0s;
  width: max(35vw, 45vh);

  @media (max-width: 859px) {
    & {
      text-align: center;
    }
  }
`;

export const BtnComp = styled.button`
  border: none;
  color: #ffffff;
  font-size: 30px;
  background: rgb(51, 50, 50, 50%);
  padding: 10px 40px;
  text-decoration: none;
  transition: all 0.1s 0s ease-in;
  font-family: 'Montserrat';

  &:hover {
    background: rgba(36, 35, 35, 0.5);
    text-decoration: none;
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const CaseImageComp = styled.img<{ 'data-show': boolean }>`
  ${(props) =>
    props['data-show']
      ? ``
      : `
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
    `}
  width: max(42vw, 50vh);
  filter: drop-shadow(19px 18px 20px #000);
  transition: all 0.8s 0s;
`;
