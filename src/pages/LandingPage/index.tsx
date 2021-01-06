import React from 'react'
import styled from 'styled-components'
import Header from "../../components/HeaderContainer"
import Main from '../../components/mainContainer'
import App from '../../components/SectionApp'
export const Container = styled.div`
position: relative;
width: 100%; 
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-top: 163px;
`

export default function LandingPage() {
  return (
    <Container>
      <Header />
      <Main />
      <App />
    </Container>
  )
}