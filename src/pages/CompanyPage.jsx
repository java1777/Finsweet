import CompanyHero from "../components/CompanyHero/CompanyHero";
import CompanyStory from "../components/CompanyStory/CompanyStory";
import CompanyTeam from "../components/CompanyTeam/CompanyTeam";
import CompanyVision from "../components/CompanyVision/CompanyVision";
import Expertise from "../components/Expertise/expertise";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import Newsletter from "../components/Newsletter/newsletter";

export default function CompanyPage() {
  return (
    <div>
      <Navbar />
      <CompanyHero />
      <CompanyStory />
      <Expertise />
      <CompanyVision />
      <CompanyTeam />
      <Newsletter />
      <Footer />
    </div>
  );
}
