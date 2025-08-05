import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { teamMembers } from "./teamMembers";
import TeamGridSection from "./TeamGridSection";



export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Petroleum and Natural Gas Develpment" />
            <AboutSection 
                aboutText="The Imo State Ministry of Petroleum & Natural Gas Development is the authoritative state body responsible for shaping policy, regulating operations, managing infrastructure projects, and overseeing environmental and community engagement within Imo’s oil and gas sector. The ministry ensures that resource extraction is conducted legally, sustainably, and with equitable benefits for the state's citizens, focusing heavily on expanding domestic gas utilization, reducing flaring, and enhancing energy-based economic growth. The ministry plays a central role in shaping policy, regulating operations, managing infrastructure projects, and leading environmental and community engagement within Imo’s oil and gas sector. It ensures resource extraction is legal, sustainable, and beneficial to citizens"
                imgSrc="/images/hero_img.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Partner with Us to Transform the Oil and Gas sector in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}