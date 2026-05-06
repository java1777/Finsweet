import BlogHero from "../components/BlogHero/BlogHero";
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import Newsletter from "../components/Newsletter/newsletter";

export default function BlogPage() {
  return (
    <div>
      <Navbar />
      <BlogHero />
      <Newsletter />
      <Footer />
    </div>
  );
}
