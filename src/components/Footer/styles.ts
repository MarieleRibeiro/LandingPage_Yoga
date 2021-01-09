import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.gray100};
  display: flex;
  padding: 50px 700px 85px 100px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 0 0 28px;
  }
`;
export const Nav = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    flex-direction: column;
  }

  h6 {
    max-width: 139px;
    width: 100%;
    font-family: "Inter";
    font-weight: bold;
    font-size: 20px;
    color: #2b3076;
    margin-top: 45px;
  }
  a {
    font-family: "Inter";
    font-size: 12px;
    color: #2b3076;
    margin: 21px 0;
  }
  a:hover {
    color: pink;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li:nth-child(2) {
    margin: 0 80px 0 80px;
  }
  @media (max-width: 960px) {
    li:nth-child(2) {
      margin: 0;
    }
  }
`;
