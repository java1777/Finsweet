import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Expertise from "./components/Expertise/expertise";
import Services from "./components/Services/services";
import Process from "./components/Process/process";
import Testimonials from "./components/Testimonials/testimonials";
import Blogs from "./components/Blogs/blogs";
import Newsletter from "./components/Newsletter/newsletter";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import CompanyPage from "./pages/CompanyPage";
import CareerPage from "./pages/CareerPage";
import TeamTemplatePage from "./pages/TeamTemplatePage";
import CareerInnerPage from "./pages/CareerInnerPage";
import BlogPage from "./pages/BlogPage";
import BlogInnerPage from "./pages/BlogInnerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
              <Footer />
            </div>
          }
        />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/TeamTemplatePage" element={<TeamTemplatePage />} />
        <Route path="/CareerInnerPage" element={<CareerInnerPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="BlogInnerPage" element={<BlogInnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
