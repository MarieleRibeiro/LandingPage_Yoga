import styled from "styled-components";
export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin-bottom: 93px;
  h4 {
    color: #4b5092;
    font-size: 26px;
  }
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 0 25px;
  }
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0 45px 0;
  border-bottom: 1px solid #e2e5e8;
  transform: rotate(-0.05deg);
  margin-bottom: 50px;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: baseline;
  }
  button {
    border: 2px solid #7d81b1;
    background: none;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 16px 40px;
    margin-left: 19px;
    font-weight: 600;
    font-size: 16px;
    color: #4b5092;
    font-family: "Inter";
    @media (max-width: 960px) {
      width: 100%;
      border-radius: 3px;
      margin: 40px 0 0 0;
    }
  }
`;