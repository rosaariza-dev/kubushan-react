import Footer from "@/components/global/Footer";
import About from "@/components/sections/home/About";
import Coworking from "@/components/sections/home/Coworking";
import Hero from "@/components/sections/home/Hero";
import Menu from "@/components/sections/home/Menu";
import Services from "@/components/sections/home/Services";
import Subscription from "@/components/sections/home/Subscription";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Services />
      <Coworking />
      <Subscription />
      <Footer />
    </>
  );
};

export default HomePage;
