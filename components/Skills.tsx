import React from "react"
import {
  CloudCog,
  Network,
  ShieldCheck,
  MonitorCog,
  Wrench,
  Headset,
  type LucideIcon,
} from "lucide-react"

type SkillCategory = {
  title: string
  icon: LucideIcon
  description: string
  context: string
  items: string[]
}

const skills: SkillCategory[] = [
  {
    title: "Cloud Platforms",
    icon: CloudCog,
    description: "Cloud administration, architecture and managed services",
    context: "AWS & Azure",
    items: [
      "AWS",
      "Microsoft Azure",
      "Amazon S3",
      "EC2",
      "Lambda",
      "IAM",
      "CloudFront",
      "Route 53",
      "CloudWatch",
      "Amazon Polly",
      "Amazon SNS",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    description: "Network infrastructure, configuration and troubleshooting",
    context: "CCNA-aligned coursework",
    items: [
      "TCP/IP",
      "IPv4",
      "Subnetting",
      "Routing",
      "Switching",
      "VLANs",
      "DNS",
      "DHCP",
      "VPN",
      "Cisco Packet Tracer",
      "Wireshark",
    ],
  },
  {
    title: "Cyber Security",
    icon: ShieldCheck,
    description: "Security operations, investigation and defensive practices",
    context: "University labs",
    items: [
      "Cyber Security Operations",
      "Incident Response",
      "Digital Investigations",
      "IAM",
      "Vulnerability Assessment",
      "Kali Linux",
      "Nmap",
      "Splunk",
      "Network Security",
      "Security Governance",
    ],
  },
  {
    title: "Systems & Identity",
    icon: MonitorCog,
    description: "Enterprise systems, identity and endpoint administration",
    context: "6+ years enterprise IT",
    items: [
      "Windows",
      "Windows Server",
      "Linux",
      "macOS",
      "Active Directory",
      "Microsoft Entra ID",
      "Microsoft Intune",
      "Microsoft 365",
      "Exchange Online",
      "Group Policy",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    description: "Platforms used for delivery, support and technical projects",
    context: "Hands-on experience",
    items: [
      "ServiceNow",
      "Git",
      "GitHub",
      "Visual Studio Code",
      "VMware",
      "Cisco Packet Tracer",
      "AWS Management Console",
      "Azure Portal",
      "SCCM",
      "IIS",
      "SQL Server",
    ],
  },
  {
    title: "IT Operations",
    icon: Headset,
    description: "Enterprise support, service delivery and infrastructure work",
    context: "Professional experience",
    items: [
      "Technical Support",
      "Incident Management",
      "Troubleshooting",
      "User Migration",
      "Device Deployment",
      "Asset Management",
      "Documentation",
      "Ticket Management",
      "Vendor Coordination",
      "End-user Support",
    ],
  },
]

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-container padding-container bg-[#f7f7f7] py-10 pb-32 dark:bg-slate-800 lg:py-20"
    >
      {/* Section heading */}
      <div className="pb-16 text-center lg:pb-20">
        <h2 className="bold-18 uppercase tracking-[1rem] text-[#F7AB0A]">
          Skills
        </h2>
      </div>

      {/* Section introduction */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Technical Skills
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          A combination of enterprise IT experience, university coursework,
          certification preparation and hands-on cloud, networking and cyber
          security projects.
        </p>
      </div>

      {/* Skills grid */}
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
            context={skill.context}
            items={skill.items}
          />
        ))}
      </ul>
    </section>
  )
}

type SkillCardProps = {
  title: string
  icon: LucideIcon
  description: string
  context: string
  items: string[]
}

const SkillCard = ({
  title,
  icon: Icon,
  description,
  context,
  items,
}: SkillCardProps) => {
  return (
    <li className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700">
      {/* Card heading */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-teal-700 transition duration-300 group-hover:scale-105 dark:bg-amber-400/15 dark:text-amber-300">
          <Icon size={28} strokeWidth={2} aria-hidden="true" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#F7AB0A]">
            {context}
          </p>

          <h4 className="mt-1 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
            {title}
          </h4>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>

      {/* Skill tags */}
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition duration-200 group-hover:border-amber-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:border-amber-400/30"
          >
            {item}
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Skills
