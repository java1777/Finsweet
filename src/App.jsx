import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Expertise from "./components/Expertise/expertise";
import Services from "./components/Services/services";
import Process from "./components/Process/process";

export default function App() {
  return (
    <div className="bg-[#1e1e2e] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
    </div>
  );
}
