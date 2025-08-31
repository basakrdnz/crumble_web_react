import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
// import Campaigns from "./components/Campaigns";
import Story from "./components/Story";
import Location from "./components/Location";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      {/* <Campaigns /> */}
      <Story />
      <Location />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
