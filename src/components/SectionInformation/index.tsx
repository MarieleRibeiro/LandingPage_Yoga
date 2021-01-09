import { Container, Article, Wrapper, Description, DescriptionLefth, Info, Span, DescriptionRight } from "./styles"
import image3 from "../../images/image3.png";

export default function Information() {
  return (
    <Container>
      <Article>
        <Description>
          <h2>Realign Your Perception</h2>
          <Wrapper>
            <DescriptionLefth>
              <Info>
                <h3>Yoga for Flexibillity</h3>
                <p>
                  Flexible position for stretch your body and make you relaxed
                </p>
              </Info>
              <Span>
                <h3>Better Posture Yoga </h3>
                <p>
                  For the better posture our experts know how to treat your body
                </p>
              </Span>
            </DescriptionLefth>

            <DescriptionRight>
              <Span>
                <h3>Pose for Strength</h3>
                <p>This pose is for strength gives your body relaxion</p>
              </Span>
              <Info>
                <h3>Breathing Benefits</h3>
                <p>
                  Drop into the flow and tune into your body. features strong,
                  fluid yoga classes with minimal cueing to help you enter the
                  flow state
                </p>
              </Info>
            </DescriptionRight>
          </Wrapper>
        </Description>
        <img src={image3} alt="" />
      </Article>
    </Container>
  );
}
