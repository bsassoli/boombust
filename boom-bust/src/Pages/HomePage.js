import React from "react";
import Container from "../components/UI/Container";
import NavBar from "../components/UI/NavBar";
import Hero from "../components/sections/Hero";
import Reasons from "../components/sections/Reasons";
import SimpleTable from "../components/sections/SimpleTable";

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Hero />
      </Container>
      <Container>
        <Reasons id="reasons" />
      </Container>
      <Container>
        <SimpleTable id="signals" />
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
