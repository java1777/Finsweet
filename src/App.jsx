import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Expertise from "./components/Expertise/expertise";
import Services from "./components/Services/services";
import Process from "./components/Process/process";
import Testimonials from "./components/Testimonials/testimonials";
import Blogs from "./components/Blogs/blogs";
import Newsletter from "./components/Newsletter/newsletter";

export default function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Services />
      <Process />
      <Testimonials />
      <Blogs />
      <Newsletter />
    </div>
  );
}
