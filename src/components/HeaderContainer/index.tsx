import image1 from "../../images/image1.png";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  margin-bottom: 327px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 0 28px 0 28px;
    margin-bottom: 109px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 55px;
  right: 100px;
  cursor: pointer;
  background: none;
  outline: none;
`;
export const Left = styled.div`
  width: 100%;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    margin-top: 37px;
    margin-bottom: 88px;
  }
  button {
    background: #4b5092;
    border-radius: 40px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    padding: 16px 55px;
    outline: none;
    @media (max-width: 960px) {
      width: 100%;
      border-radius: 4px;
    }
  }
`;
export const Right = styled.div`
  width: 100%;
  max-width: 511px;
  margin-left: 188px;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    margin: 79px 0 0 0;
  }
`;

export default function Header() {
  return (
    <Container>
      <Button>
        <FiSearch size="24" />
      </Button>
      <Left>
        <h1>
          {" "}
          A Complete <br /> workout From <br /> head to toes{" "}
        </h1>
        <p>
          Tune into your body and give it exactly <br /> what it needs.{" "}
        </p>
        <button>Learn more</button>
      </Left>
      <Right>
        <img src={image1} alt="Yoga" />
      </Right>
    </Container>
  );
}
