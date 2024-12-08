import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Prices from "../components/Prices/Prices";
import Welcome from "../components/Welcome/Welcome";
import "../styles/global.css";

const Home = async () => {
  return (
      <main className='app'>
        <Hero />
        <About />
        <Welcome />
        <Prices />
      </main>
  );
};

export default Home;
