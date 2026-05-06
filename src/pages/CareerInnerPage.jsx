import CareerDetails from "../components/CareerDetails/CareerDetails";
import CareerInnerHero from "../components/CareerInnerHero/CareerInnerHero";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import Newsletter from "../components/Newsletter/newsletter";

export default function CareerInnerPage() {
  return (
    <div>
      <Navbar />
      <CareerInnerHero />
      <CareerDetails />
      <Newsletter />
      <Footer />
    </div>
  );
}
