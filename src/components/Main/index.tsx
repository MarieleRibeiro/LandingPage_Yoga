import { Container, Left, Right, Image } from "./styles"
import image2 from "../../images/image2.png";
import leaf from "../../images/Leaf.png";
import group from "../../images/Group.png";

export default function Main() {
  return (
    <Container>
      <Left>
        <img src={image2} alt="" />
      </Left>
      <Right>
        <img src={leaf} alt="left" />
        <h2>
          {" "}
          Find what <br /> moves you{" "}
        </h2>
        <p>
          Whether you’re a complete beginner or you <br />
          want to step up your routine, get the full studio <br />
          experience at home with thousands of classes <br />
          for body, mind, and spirit.
        </p>
      </Right>
      <Image>
        <img src={group} alt=" Yoga" />
      </Image>
    </Container>
  );
}
