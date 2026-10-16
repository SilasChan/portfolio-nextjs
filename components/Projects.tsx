import Image from "next/image"
import Link from "next/link"
import { Cloud, Network, ShieldCheck, ArrowUpRight } from "lucide-react"

import { Projects as enterpriseProjects } from "@/constants"
import { cloudProjects } from "@/data/cloudProjects"
import { TechnologyTags, OutcomeList } from "@/components/CloudProjectCard"

/* -------------------------------------------------------------------------- */
/*                         Project Category Data                              */
/* -------------------------------------------------------------------------- */

const projectCategories = [
  {
    title: "Cloud Computing",
    href: "/cloud",
    description:
      "AWS architecture, high availability, serverless automation and cloud services.",
    label: `${cloudProjects.length} Projects`,
    icon: Cloud,
  },
  {
    title: "Networking",
    href: "/networking",
    description:
      "Routing, switching, VLANs, DNS and practical network troubleshooting.",
    label: "Explore Networking",
    icon: Network,
  },
  {
    title: "Cybersecurity",
    href: "/security",
    description:
      "Security monitoring, digital forensics, incident investigation and network security.",
    label: "Explore Security",
    icon: ShieldCheck,
  },
]

/* -------------------------------------------------------------------------- */
/*                              Projects Section                              */
/* -------------------------------------------------------------------------- */

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-container padding-container bg-[#f7f7f7] py-10 pb-32 dark:bg-slate-800 lg:py-20"
    >
      {/* Main heading */}
      <div className="pb-16 text-center lg:pb-20">
        <h2 className="bold-18 uppercase tracking-[1rem] text-[#F7AB0A]">
          Projects
        </h2>
      </div>

      <div className="space-y-24">
        {/* Project Category Overview */}
        <div>
          <ProjectSectionHeader
            title="Explore My Projects"
            description="Browse my hands-on projects and technical labs across cloud computing, networking and cybersecurity."
          />

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projectCategories.map((category) => {
              const Icon = category.icon

              return (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="group flex h-full min-h-64 flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#F7AB0A] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:ring-offset-2 dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-offset-slate-800"
                  >
                    {/* Icon and arrow */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-400/15 dark:text-[#F7AB0A]">
                        <Icon size={28} aria-hidden="true" />
                      </div>

                      <ArrowUpRight
                        size={22}
                        aria-hidden="true"
                        className="text-slate-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F7AB0A]"
                      />
                    </div>

                    {/* Category title */}
                    <h3 className="mt-7 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                      {category.title}
                    </h3>

                    {/* Category description */}
                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {category.description}
                    </p>

                    {/* Category link label */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-600 dark:text-[#F7AB0A]">
                      {category.label}
                      <span aria-hidden="true">→</span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Enterprise Projects */}
        <div>
          <ProjectSectionHeader
            title="Enterprise Projects"
            description="Selected cloud migration, network infrastructure and identity management projects delivered across enterprise environments."
          />

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {enterpriseProjects.map((project) => (
              <EnterpriseProjectCard
                key={project.title}
                title={project.title}
                imgURL={project.ImgURL}
                description={project.description}
                technologies={project.technologies}
                achievements={project.achievements}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                          Project Section Header                            */
/* -------------------------------------------------------------------------- */

type ProjectSectionHeaderProps = {
  title: string
  description: string
}

const ProjectSectionHeader = ({
  title,
  description,
}: ProjectSectionHeaderProps) => {
  return (
    <div className="mb-10">
      <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
        {description}
      </p>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                         Enterprise Project Card                            */
/* -------------------------------------------------------------------------- */

type EnterpriseProjectCardProps = {
  title: string
  imgURL: string
  description: string
  technologies?: string[]
  achievements?: string[]
}

const EnterpriseProjectCard = ({
  title,
  imgURL,
  description,
  technologies,
  achievements,
}: EnterpriseProjectCardProps) => {
  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700">
      {/* Project image */}
      <div className="relative h-56 w-full overflow-hidden sm:h-64">
        <Image
          src={imgURL}
          alt={`${title} project`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7AB0A]">
          Enterprise Project
        </p>

        <h4 className="mt-2 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <TechnologyTags technologies={technologies} />
        )}

        {achievements && achievements.length > 0 && (
          <OutcomeList outcomes={achievements} />
        )}
      </div>
    </li>
  )
}

export default Projects
