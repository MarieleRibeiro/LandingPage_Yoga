import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Article = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 171px;
  @media (max-width: 960px) {
    flex-direction: column;
    width: 100%;
  }
  img {
    @media (max-width: 960px) {
      max-width: 312px;
      width: 100%;
    }
  }
`;
export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 960px) {
    align-items: center;
    padding: 0 35px 0 28px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: #7b7fb0;
    margin-top: 10px;
  }
  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: #4b5092;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  margin-top: 80px;
  margin-right: 168px;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-right: 0;
  }
`;
export const DescriptionLefth = styled.div`
  width: 100%;
  margin-right: 41px;
  @media (max-width: 960px) {
    margin: 0;
  }
`;
export const Info = styled.div`
  width: 100%;
  max-width: 294px;
  background: #f8fbff;
  border-radius: 4px;
  padding: 26px 20px 71px;
  @media (max-width: 960px) {
    margin-bottom: 21px;
    max-width: none;
  }
`;
export const Span = styled.div`
  width: 100%;
  max-width: 294px;
  border-radius: 4px;
  padding: 26px 20px 71px;
  @media (max-width: 960px) {
    background: #f8fbff;
    margin-bottom: 21px;
    max-width: none;
  }
`;
export const DescriptionRight = styled.div`
  width: 100%;
`;