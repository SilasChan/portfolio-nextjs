// Navigation
export const Nav_LINKS = [
  { href: "/", key: "about", label: "About" },
  { href: "/", key: "skills", label: "Skills" },
  { href: "/", key: "certificatie", label: "Certificatie" },
  { href: "/", key: "portfolio", label: "Portfolio" },
  // { href: "/", key: "contact", label: "Contact Us" },
]

// Skills Section
export const SKILLS = [
  {
    title: "Technical Support and Troubleshooting",
    icon: "/support.svg",
    subItems: [
      "Hardware and software issue resolution",
      "Remote and on-site support",
      "Ticket management and escalation",
    ],
  },
  {
    title: "Office 365 Administration and Support",
    icon: "/office.svg",
    subItems: [
      "User account management",
      "Email and collaboration tool configuration",
      "SharePoint and OneDrive administration",
    ],
  },
  {
    title: "Network Troubleshooting",
    icon: "/network.svg",
    subItems: [
      "Diagnosing and resolving connectivity issues",
      "Analyzing network performance and bottlenecks",
      "Troubleshooting Wi-Fi and wireless network problems",
    ],
  },
  {
    title: "IT Training and Documentation",
    icon: "/stack.svg",
    subItems: [
      "Conducting user training sessions",
      "Creating and maintaining IT documentation",
      "Developing user guides and FAQs",
    ],
  },
  {
    title: "Project Support and Implementation",
    icon: "/frontend.svg",
    subItems: [
      "Assisting with local and global IT projects",
      "Hardware and software deployment, User migration and onboarding",
    ],
  },
  {
    title: "IT Asset Management and Procurement",
    icon: "/laptop.svg",
    subItems: [
      "Inventory tracking and management",
      "Software licensing and compliance",
      "Hardware lifecycle management and procurement support",
    ],
  },

  // },
  // {
  //   title: "Frontend Web Development",
  //   icon: "/stack.svg",
  //   description:
  //     "I have experience building websites using JavaScript, React, and Tailwind CSS.",
  // },
]

// Certifications

export const Certificates = [
  {
    title: "AWS Certified Cloud Practitoner",
    icon: "/aws_CloudPractitioner.png",
  },
  {
    title: "Azure Administrator Associate",
    icon: "/azure-administrator-associate.png",
  },
  {
    title: "Azure Funadmental",
    icon: "/azure-fundamentals.png",
  },
  {
    title: "ITIL 4 Foundation in IT Service Management",
    icon: "/ITIL_FoundationV4.png",
  },
]

// Portfolio Section
export const PORTFOLIO = [
  {
    title: "Google Cloud Platform (GCP) Migration",
    ImgURL: "/project1.png",
    description:
      "Collaborated with Accenture to migrate local servers to GCP, managing critical tasks such as AAD authentication, SQL Server Express transfer, and SSL certificate setup.",
    technologies: [
      "Google Cloud Platform (GCP)",
      "Azure Active Directory (AAD)",
      "SQL Server",
      "IIS",
      "SSL Certificates",
    ],
    achievements: [
      "Migrated all local servers to GCP, ensuring zero downtime.",
      "Configured secure web servers and application redirection.",
      "Facilitated seamless authentication using AAD.",
    ],
    duration: ["3 months"],
  },
  {
    title: "D2 Network",
    ImgURL: "/project2.png",
    description:
      "Proficiently troubleshoot network issues at the D2 site office, ensuring stable and reliable connectivity. Successfully delivered effective solutions that improved overall user experience. Additionally, I played a key role in suggesting and assisting with the procurement, installation, and configuration of enterprise routers, which enabled remote network monitoring and enhanced overall system performance.",
    technologies: ["WAN", "LAN", "SWITCHES", "AP"],
    achievements: [
      "Resolved complex connectivity problems efficiently",
      "Improved site office network stability",
      "Deployed solutions that monitor site office network remotely",
    ],
    duration: ["4 months"],
  },
  {
    title: "AD Migration",
    ImgURL: "/project3.png",
    description:
      "Coordinated and participated in AD migration globally, including user account, computer, and local server, migrate to new domains. Additionally, led the implementation of Intune device/Azure AD migration and Office 365/Exchange environments.",
    technologies: ["Active Directory", "Azure AD", "Intune", "Office 365"],
    achievements: [
      "Successfully migrated over 100 users and devices across multiple departments.",
      "Streamlined Intune and Azure AD integrations for better device management.",
      "Achieved zero downtime during the entire migration process.",
    ],
    duration: ["3 months"],
  },
]

// Testimonials Section

// Footer Section

export const FOOTER_LINKS = [
  { href: "/", key: "about", label: "About", sectionId: "about-section" },
  {
    href: "/",
    key: "portfolio",
    label: "Portfolio",
    sectionId: "portfolio-section",
  },
  { href: "/", key: "skills", label: "Skills", sectionId: "skills-section" },
  {
    href: "/",
    key: "certificate",
    label: "Certificate",
    sectionId: "certificate-section",
  },
]

export const SOCIALS = [
  {
    href: "https://github.com/SilasChan?tab=repositories",
    key: "github",
    imgURL: "/github.svg",
  },
  {
    href: "http://www.linkedin.com/in/silas-chan",
    key: "linkedin",
    imgURL: "/linkedin.svg",
  },
  {
    href: "https://medium.com/@silaschan421",
    key: "medium",
    imgURL: "/medium.svg",
  },
  // { href: "/", key: "instagram", imgURL: "/instagram.svg" },
  // { href: "/", key: "twitter", imgURL: "/twitter.svg" },
  // { href: "/", key: "youtube", imgURL: "/youtube.svg" },
]
