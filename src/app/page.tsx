import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
// import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import FeaturedPartners from "./components/FeaturedPartners";

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Petroleum and Natural Gas Development" 
        caption="Fueling Imo's Future Through Responsible Energy Development" 
        subtitle="The Imo State Ministry of Petroleum & Natural Gas Development is the dedicated government body overseeing the management, policy formulation, and advancement of petroleum and natural gas resources in Imo State, Nigeria."
      />
      <AboutSection 
        title="About Us"
        subtitle= "The Imo State Ministry of Petroleum & Natural Gas Development is the dedicated government body overseeing the management, policy formulation, and advancement of petroleum and natural gas resources in Imo State, Nigeria."
        image1="/images/factory2.png"
        image2="/images/factory.png"
      />
      <AboutCommisioner 
        imgSrc="/images/commisioner.jpg" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        {/* Promise needs to get the people they are partnering with <FeaturedPartners /> */}
        <QuickLinks />
        {/* <Advertisement /> */}
      </section>
      {/* <Stats /> */}
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us to create a properous future for Imo state, through Petroleum and natural gas development."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
