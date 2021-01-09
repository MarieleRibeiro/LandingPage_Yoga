import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 150px;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const Right = styled.div`
  position: relative;
  padding: 56px 79px;
  max-width: 504px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f8fbff;
  border-radius: 4px;
  @media (max-width: 960px) {
    margin-bottom: 152px;
  }
  p {
    font-size: 16px;
    margin-top: 20px;
  }
  img {
    position: absolute;
    top: -70px;
    left: 59px;
  }
`;
export const Left = styled.div`
  max-width: 594px;
  width: 100%;
  margin-right: 37px;
  @media (max-width: 960px) {
    max-width: 360px;
    width: 100%;
    align-items: center;
    margin: 0;
  }
`;
export const Image = styled.div`
  position: absolute;
  top: -97px;
  right: 0;
  width: 209.74px;
  height: 194.65px;
  z-index: -1;
  @media (max-width: 960px) {
    display: none;
  }
`;
