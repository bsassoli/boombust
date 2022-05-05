import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Hero from "./Hero";
import Container from "./Container";
import SimpleTable from "./SimpleTable";

const Home = () => {
  
  return (
    <div>
      <NavBar />
      <Container>
        
        <Hero />
        <SimpleTable />
      </Container>
    </div>
  );
};

export default Home;
