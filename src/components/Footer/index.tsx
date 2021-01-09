import { Container, Nav } from "./styles"

export default function Footer() {
  return (
    <Container>
      <Nav>
        <ul>
          <h6>Our services</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </ul>

        <ul>
          <h6>Our Company</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </ul>

        <ul>
          <h6>Address</h6>
          <a href="#">Pricing</a>
          <a href="#">Tracking</a>
          <a href="#">Report a Bug</a>
          <a href="#">Terms of services</a>
        </ul>
      </Nav>
    </Container>
  );
}
