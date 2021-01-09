import { Container, SectionImage, ImageLeft, ImageRight, SectionDownload, Buttons } from "./styles"
import Apple from "../../images/apple.png";
import Google from "../../images/google_play.png";
import styled from "styled-components";


const StoreApp = styled.button`
  background: url(${Apple}) no-repeat;
  border-radius: 3px;
  width: 138px;
  height: 46px;
`;
const PlayGoogle = styled.button`
  background: url(${Google}) no-repeat;
  border-radius: 3px;
  width: 174px;
  height: 47px;
`;

export default function App() {
  return (
    <Container>
      <SectionImage>
        <ImageLeft></ImageLeft>
        <ImageRight></ImageRight>
      </SectionImage>

      <SectionDownload>
        <h1>
          Our App is <br /> Available
        </h1>
        <p>
          The Yoga App is all new and better than <br />
          ever! You can download the app for <br />
          free!
          <br />
          <br />
          The new app provides a far better user <br />
          experience and lots of great features for <br />
          all those who access our site via a tablet <br />
          or mobile device.
        </p>
        <Buttons>
          <StoreApp></StoreApp>
          <PlayGoogle></PlayGoogle>
        </Buttons>
      </SectionDownload>
    </Container>
  );
}
