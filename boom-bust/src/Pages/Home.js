import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Reasons from "../components/Reasons";
import SimpleTable from "../components/SimpleTable";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Hero />
      </Container>
      <Container>
        <Reasons />
      </Container>
      <Container>
        <SimpleTable />
      </Container>
    </React.Fragment>
  );
};

export default Home;
