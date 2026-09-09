export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  features: string[];
  technologies: string[];
  status: "Live" | "In Progress" | "Prototype";
  link?: string;
  image?: string;
  screenshots?: string[];
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "BlueRoute Shipping Platform",
    description: "A logistics and freight service platform offering structured shipping services and global cargo coordination.",
    overview: "BlueRoute is a logistics and shipping service platform designed to provide structured freight solutions, including air, sea, customs coordination, and supply chain handling. The platform presents services clearly and focuses on reliable cargo movement workflows.",
    features: [
      "Logistics service presentation",
      "Freight and shipping service structure",
      "Supply chain service information",
      "Global cargo service coordination",
    ],
    technologies: ["Logistics Platform", "Service Website", "System Structure"],
    status: "Live",
    link: "https://blueroute.co.uk",
    screenshots: [
      "/assets/blueroute-hero.png",
      "/assets/blueroute-tracking.png",
    ],
  },
  {
    id: "2",
    title: "Nexuskey Email & Data Automation Tool",
    description: "An OSINT-enhanced system for extracting emails, generating keyword sets, and processing online data.",
    overview: "Nexuskey is an automation tool designed for structured data extraction workflows. It supports email extraction, keyword generation, and domain filtering to assist researchers and analysts in efficient data discovery and analysis.",
    features: [
      "Email extraction from URLs and content",
      "Keyword generation engine",
      "Domain filtering system",
      "Data workflow automation",
    ],
    technologies: ["Automation Tool", "Data Processing", "Research Workflow"],
    status: "Live",
    link: "https://nexuskey.store",
    screenshots: [
      "/assets/nexuskey-home.png",
      "/assets/nexuskey-extractor.png",
      "/assets/nexuskey-keywords.png",
    ],
  },
   {
     id: "3",
     title: "Opusnexa Construction Services Marketplace",
     description: "A platform connecting contractors, suppliers, and logistics providers for comprehensive construction project services.",
     overview: "Opusnexa is a construction services marketplace platform enabling users to discover verified contractors, browse service categories, post bookings, and manage projects. The platform streamlines service discovery with verified providers and provides dashboard tools for both service seekers and vendors.",
     features: [
       "Contractor discovery and verification system",
       "Category-based service browsing",
       "Vendor dashboard and service management",
       "Booking and project coordination",
       "User notifications and request tracking",
       "Construction service ecosystem",
     ],
     technologies: ["Marketplace Platform", "Service Coordination", "Dashboard System"],
     status: "In Progress",
     screenshots: [
        "/assets/opusnexa-hero.png",
        "/assets/opusnexa-browse.png",
        "/assets/opusnexa-dashboard.png",
        "/assets/opusnexa-bookings.png",
        "/assets/opusnexa-mybookings.png",
        "/assets/opusnexa-notifications.png",
      ],
   },
];
