import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Slider } from "./components/Slider";
import "./App.css";
import { FAQ } from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Hero />
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
