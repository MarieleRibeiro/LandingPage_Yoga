import React from "react";
import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
background: #E5E5E5;
display: flex;
padding: 50px 700px 85px 100px;

`
export const Nav = styled.li`
width: 100%;
display: flex;
justify-content: center;

h6 {
  max-width: 139px;
  width: 100%;
  font-family: 'Inter';
  font-weight: bold;
  font-size: 20px;
  color: #2b3076;
}
a {
  font-family: 'Inter';
  font-size: 12px;
  color: #2b3076;
  margin: 21px 0;
}
a:hover {
  color: pink;
}
li {
  display: flex;
  flex-direction: column;
  list-style:none
}
li:nth-child(2) {
    margin: 0 80px 0 80px;
  }



`

export default function Footer() {
  return (
    <Container>
      <Nav>
        <li>
          <h6>Our services</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </li>

        <li>
          <h6>Our Company</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </li>

        <li>
          <h6>Address</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </li>
      </Nav>

    </Container>
  )
}