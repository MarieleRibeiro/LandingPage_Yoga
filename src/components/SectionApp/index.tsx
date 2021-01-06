import React from 'react'
import styled from 'styled-components'
import Apple from "../../images/apple.png"
import Google from "../../images/google_play.png"

export const Container = styled.div`
width: 100%;
background: #E5E5E5;
display: flex;
align-items: center;
justify-content: center;
padding: 153px 134px 125px 100px;
margin-bottom: 127px;

`
export const SectionImage = styled.div`
position: relative;
display: flex;
width: 100%;
`
export const ImageLeft = styled.div`
width: 373px;
height: 681px;
background: #495094;
box-shadow: 7px 7px 10px rgba(73, 80, 148, 0.21);
z-index: 1;
`
export const ImageRight = styled.div`
position: absolute;
width: 373px;
height: 681px;
background: #FFFFFF;
right: 90px;
top: -65px;
`
export const SectionDownload = styled.div`
width: 100%;
max-width: 363px;

p {
  margin: 20px 0 39px 0;
}
`
export const Buttons = styled.div`
width: 100%;
display: flex;
`
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
        <h1>Our App is <br /> Available</h1>
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
  )
}