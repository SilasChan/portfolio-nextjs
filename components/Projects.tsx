import React from "react"
import Image from "next/image"
import { Projects as enterpriseProjects } from "@/constants"
import { cloudProjects } from "@/data/cloudProjects"

import CloudProjectCard, {
  TechnologyTags,
  OutcomeList,
} from "@/components/CloudProjectCard"

/* -------------------------------------------------------------------------- */
/*                               Cloud Projects                               */
/* -------------------------------------------------------------------------- */

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
        {/* Cloud Projects */}
        <div>
          <ProjectSectionHeader
            title="Cloud Projects"
            description="Hands-on AWS projects demonstrating cloud architecture, content delivery, serverless automation, security and event-driven services."
          />

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {cloudProjects.map((project) => (
              <CloudProjectCard
                key={project.title}
                title={project.title}
                imgURL={project.imgURL}
                description={project.description}
                technologies={project.technologies}
                outcomes={project.outcomes}
                mediumURL={project.mediumURL}
              />
            ))}
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

        {/* Networking and Security Labs */}
        <div>
          <ProjectSectionHeader
            title="Networking & Security Labs"
            description="Technical labs completed through university study, certification preparation and independent practice."
          />

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/50 px-6 py-14 text-center dark:border-slate-600 dark:bg-slate-700/40">
            <p className="font-semibold text-slate-500 dark:text-slate-300">
              Networking and cyber security labs will be added soon.
            </p>
          </div>
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

/* -------------------------------------------------------------------------- */
/*                            Cloud Project Card                              */
/* -------------------------------------------------------------------------- */

export default Projects
