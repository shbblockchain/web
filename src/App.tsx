import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

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
