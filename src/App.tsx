import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { FAQ } from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FAQ />
      <ScrollToTop />
    </>
  );
}

export default App;
