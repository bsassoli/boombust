import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Reasons from "../components/Reasons";
import SimpleTable from "../components/SimpleTable";

const HomePage = () => {
  return (
    
    <React.Fragment>
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

export default HomePage;
