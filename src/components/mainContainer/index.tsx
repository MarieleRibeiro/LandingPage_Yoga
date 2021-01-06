import styled from 'styled-components'
import image2 from "../../images/image2.png"
import leaf from "../../images/Leaf.png"
import group from "../../images/Group.png"

export const Container = styled.div`
position: relative;
max-width: 1240px;
width: 100%;
display: flex;
align-items: flex-start;
margin-bottom: 150px;
`
export const Right = styled.div`
position: relative;
padding: 56px 79px;
max-width: 504px;
width: 100%;
display: flex;
flex-direction: column;
background: #F8FBFF ;
border-radius: 4px;
p {
  font-size: 16px;
  margin-top: 20px;
}
img {
  position: absolute;
  top: -70px;
  left: 59px;
}
`
export const Left = styled.div`
max-width: 594px;
width: 100%;
margin-right: 37px;

`
export const Image = styled.div`
position: absolute;
top: -97px;
right: 0;
width: 209.74px;
height: 194.65px;
z-index: -1;
`

export default function Main() {
  return (
    <Container>
      <Left>
        <img src={image2} alt="" />
      </Left>
      <Right>
        <img src={leaf} alt="left" />
        <h2> Find what <br />  moves you </h2>
        <p>Whether you’re a complete beginner or you <br />
         want to step up your routine, get the full studio <br />
         experience at home with thousands of classes <br />
         for body, mind, and spirit.</p>
      </Right>
      <Image>
        <img src={group} alt="image" />
      </Image>

    </Container>
  )
}