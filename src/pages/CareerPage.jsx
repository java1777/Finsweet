import CareerCards from "../components/CareerCards/CareerCards";
import CareerHero from "../components/CareerHero/CareerHero";
import CareerWork from "../components/CareerWork/CareerWork";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import Newsletter from "../components/Newsletter/newsletter";
import TeamTemplateBlog from "../components/TeamTemplateBlog/TeamTemplateBlog";

export default function CareerPage() {
  return (
    <div>
      <Navbar />
      <CareerHero />
      <CareerCards />
      <CareerWork />
      <Newsletter />
      <Footer />
    </div>
  );
}
