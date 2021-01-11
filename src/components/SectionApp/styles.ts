import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 153px 134px 125px 100px;
  margin-bottom: 127px;
  @media (max-width: 960px) {
    padding: 72px 31px 64px 28px;
  }
`;
export const SectionImage = styled.div`
  position: relative;
  display: flex;
  width: 784px;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const ImageLeft = styled.div`
  width: 373px;
  height: 681px;
  background: #495094;
  box-shadow: 7px 7px 10px rgba(73, 80, 148, 0.21);
  z-index: 1;
`;
export const ImageRight = styled.div`
  position: absolute;
  width: 373px;
  height: 681px;
  background: #ffffff;
  right: 90px;
  top: -65px;
`;
export const SectionDownload = styled.div`
  width: 100%;
  max-width: 363px;
  @media (max-width: 960px) {
    width: 100%;
  }
  h1 {
    @media (max-width: 960px) {
      font-size: 32px;
    }
  }

  p {
    margin: 20px 0 39px 0;
  }
`;
export const Buttons = styled.div`
  width: 100%;
  display: flex;
`;
