import image1 from "../../images/image1.png"
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
export const Container = styled.div`
max-width: 1240px;
width: 100%;
display: flex;
align-items: flex-end;
margin-bottom: 327px;
`
export const Button = styled.button`
  position:absolute; 
  top: 55px;
  right: 100px;
  cursor: pointer;
  background: none;
  outline: none;
`
export const Left = styled.div`
width: 100%;

p {
  margin-top: 37px;
  margin-bottom: 88px;
}
button {
  background:  #4B5092;
  border-radius: 40px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 55px;
  outline: none;
  
}
`
export const Right = styled.div`
  width: 100%;
  max-width: 511px;
  margin-left: 188px;
`

export default function Header() {
  return (
    <Container>
      <Button>
        <FiSearch size="24" />
      </Button>
      <Left>
        <h1> A Complete <br /> workout From <br /> head to toes </h1>
        <p>Tune into your body and give it exactly <br /> what it needs. </p>
        <button>Learn more</button>

      </Left>
      <Right>
        <img src={image1} alt="Yoga" />
      </Right>


    </Container>
  )
}