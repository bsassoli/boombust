import React from "react";

import NavBar from "./NavBar";
import Hero from "./Hero";
import Container from "./Container";
import Reasons from "./Reasons";
import SimpleTable from "./SimpleTable";

const Home = () => {
  return (
    <div>
      <NavBar />
        <Container>
          <Hero />
          <Reasons />
          <SimpleTable />
        </Container>
    </div>
  );
};

export default Home;
