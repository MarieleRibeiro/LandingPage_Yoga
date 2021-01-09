import image1 from "../../images/image1.png";
import { Container, Button, Left, Right } from "./styles";
import { FiSearch } from "react-icons/fi";

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
