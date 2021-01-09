import React from "react";
import { Container } from "./styles"
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import App from "../../components/SectionApp";
import Details from "../../components/SectionDetails";
import Information from "../../components/SectionInformation";


export default function LandingPage() {
  return (
    <Container>
      <Header />
      <Main />
      <App />
      <Information />
      <Details />
      <Footer />
    </Container>
  );
}
