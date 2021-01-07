import React from 'react'
import styled from 'styled-components'
import image3 from "../../images/image3.png"

export const Container = styled.div`
display: flex;
align-items: center;
`

export const Article = styled.div`
max-width: 1240px;
width: 100%;
display: flex;
align-items: center;
margin-bottom: 171px;
`
export const Description = styled.div`
width: 100%;
display: flex;
flex-direction: column;
p {
  font-size: 16px;
  line-height: 22px;
  color: #7b7fb0;
  margin-top: 10px;
}
h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #4b5092;
}
`
export const Wrapper = styled.div`
display: flex;
margin-top: 80px;
margin-right: 168px;
`
export const DescriptionLefth = styled.div`
width: 100%;
margin-right: 41px;
`
export const Info = styled.div`
width: 100%;
max-width: 294px;
background: #F8FBFF;
border-radius: 4px;
padding: 26px 20px 71px;
`
export const Span = styled.div`
width: 100%;
max-width: 294px;
border-radius: 4px;
padding: 26px 20px 71px;

`
export const DescriptionRight = styled.div`
width: 100%;
`
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
                <p>Flexible position for stretch your
             body and make you relaxed</p>
              </Info>
              <Span>
                <h3>Better Posture Yoga </h3>
                <p>For the better posture our experts
               know how to treat your body</p>
              </Span>
            </DescriptionLefth>

            <DescriptionRight>
              <Span>
                <h3>Pose for Strength</h3>
                <p>This pose is for strength gives your
               body relaxion</p>
              </Span>
              <Info>
                <h3>Breathing Benefits</h3>
                <p>Drop into the flow and tune into
                your body. features strong, fluid
                yoga classes with minimal cueing
                 to help you enter the flow state</p>
              </Info>
            </DescriptionRight>
          </Wrapper>
        </Description>
        <img src={image3} alt="" />
      </Article>

    </Container>

  )
}