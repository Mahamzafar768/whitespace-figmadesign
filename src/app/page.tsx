import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Extension from "./components/Extend";
import Customize from "./components/Customize";
import YourWork from "./components/YourWork";
import Sponsors from "./components/Sponsors";

export default function Home() {
  return (
   <div>
      <Navbar />
      <Hero />
      <Work />
      <Extension />
      <Customize />
      <YourWork />
      <Sponsors />
      <Footer />
   </div>
  );
}