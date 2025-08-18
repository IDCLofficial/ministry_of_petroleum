import ProjectHeroSection from "./ProjectHeroSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import ProjectsSection from "./ProjectsSection";
import { getProject } from "./projects";
import { Project, ProjectsResponse } from "../../../lib/types";

export default async function ProjectsPage() {
  const projects = await getProject()

  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <ProjectsSection projects={projects as unknown as Project[]} />
      <CTASection 
        heading="Partner with Us Today!"
        subtext="Join us to create a properous future for Imo state, through Petroleum and natural gas development."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}