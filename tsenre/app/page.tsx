import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
// import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import QualityPolicy from "@/components/sections/QualityPolicy";
import HSE from "@/components/sections/HSE";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        {/* <TrustedBy /> */}
        <About />
        <Stats />
        <Services />
        <WhyChooseUs />
        <QualityPolicy />
        <HSE />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
