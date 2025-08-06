interface project {
  title: string;
  image: string;
  status: string;
  description: string;
}


export const projects:project[] = [
  {
    title: "ANOH Gas Processing Plant",
    image: "/images/ANOH-Gas-Plant-Reaches-Mechanical-Completion-175274-1200x900.webp",
    status: "completed",
    description: "300MMscf/d gas facility producing dry gas, condensate & LPG. Commissioned in 2024; boosts Nigeria’s Decade of Gas goals."
  },
  {
    title: "ANOH–OB3 Pipeline Link",
    image: "/images/pipe_links.webp",
    status: "completed",
    description: "23.3km pipeline connecting ANOH to OB3 gas grid. Completed in 2024 to improve national gas distribution."
  },
  {
    title: "Assa Mother Station (CNG/LPG Hub)",
    image: "/images/2l-Image-Assa-North-Ohaji-South-Gas-Project.png",
    status: "ongoing",
    description: "5MMscf/d gas hub to supply CNG and LPG across Imo. Project underway, completion expected mid-2025."
  },
  {
    title: "Waltersmith Refinery Expansion",
    image: "/images/gas-plant.jpg",
    status: "ongoing",
    description: "Boosting capacity to 25,000bpd, includes $200M ASA-A investment & 75MW power project. Commissioner monitoring progress."
  },
  {
    title: "Environmental & IGR Projects",
    image: "/images/oil_testing.jpg",
    status: "ongoing",
    description: "EIAs, erosion control, and lab services for gas testing. NEWMAP collaboration supports climate resilience and sanitation."
  }
];
