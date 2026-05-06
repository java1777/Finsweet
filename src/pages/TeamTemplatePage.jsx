import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import TeamTemplateBlog from "../components/TeamTemplateBlog/TeamTemplateBlog";
import TeamTemplateHero from "../components/TeamTemplateHero/TeamTemplateHero";

export default function TeamTemplatePage() {
  return (
    <div>
      <Navbar />
      <TeamTemplateHero />
      <TeamTemplateBlog />
      <Footer />
    </div>
  );
}
