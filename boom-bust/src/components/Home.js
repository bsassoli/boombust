import NavBar from "./NavBar";
import Hero from "./Hero";
import Container from "./Container";

const Home = () => {
    return (
      <div>
        <NavBar />
        <Container>
          <Hero />
        </Container>
      </div>
    );
};

export default Home;