import BlogInnerHero from "../components/BlogInnerHero/BlogInnerHero";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import Newsletter from "../components/Newsletter/newsletter";

export default function BlogInnerPage() {
  return (
    <div>
      <Navbar />
      <BlogInnerHero />
      <Newsletter />
      <Footer />
    </div>
  );
}
