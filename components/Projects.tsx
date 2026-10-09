import React from "react"
import Image from "next/image"
import { Projects as enterpriseProjects } from "@/constants"

/* -------------------------------------------------------------------------- */
/*                               Cloud Projects                               */
/* -------------------------------------------------------------------------- */

const cloudProjects = [
  {
    title: "Highly Available & Scalable AWS Architecture",
    imgURL: "/aws-high-availability.png",
    description:
      "Designed and built a highly available and scalable AWS architecture, focusing on fault tolerance, reliability and infrastructure scalability.",
    technologies: [
      "AWS",
      "High Availability",
      "Scalability",
      "Cloud Architecture",
    ],
    outcomes: [
      "Designed a cloud architecture with high availability in mind.",
      "Explored infrastructure scalability and fault tolerance.",
      "Documented the architecture and implementation process.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/building-a-highly-available-scalable-aws-architecture-from-scratch-5481415babac",
  },
  {
    title: "Amazon Polly Text-to-Speech",
    imgURL: "/polly.jpg",
    description:
      "Built an event-driven serverless application that converts uploaded text files into MP3 audio and sends a completion notification.",
    technologies: [
      "Amazon S3",
      "AWS Lambda",
      "Amazon Polly",
      "Amazon SNS",
      "IAM",
      "Python",
    ],
    outcomes: [
      "Triggered AWS Lambda when a text file was uploaded to Amazon S3.",
      "Converted text content into MP3 audio using Amazon Polly.",
      "Stored generated audio files in a separate S3 bucket.",
      "Published processing notifications using Amazon SNS.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/a-narrator-using-amazon-polly-text-to-speech-a9e796792e2c",
  },
  {
    title: "Static Website Hosting on AWS",
    imgURL: "/static_website.jpg",
    description:
      "Designed and deployed a secure static website architecture using AWS content delivery, DNS and certificate management services.",
    technologies: [
      "Amazon S3",
      "CloudFront",
      "Route 53",
      "AWS Certificate Manager",
      "IAM",
    ],
    outcomes: [
      "Hosted static website files using Amazon S3.",
      "Delivered content globally through Amazon CloudFront.",
      "Configured custom-domain DNS routing using Route 53.",
      "Enabled HTTPS using an ACM SSL/TLS certificate.",
    ],
    mediumURL:
      "https://medium.com/@silaschan421/static-website-hosting-on-aws-be6a42967269",
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

type CloudProjectCardProps = {
  title: string
  imgURL: string
  description: string
  technologies: string[]
  outcomes: string[]
  mediumURL: string
}

const CloudProjectCard = ({
  title,
  imgURL,
  description,
  technologies,
  outcomes,
  mediumURL,
}: CloudProjectCardProps) => {
  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700">
      {/* Architecture diagram */}
      <div className="relative h-64 w-full overflow-hidden bg-white sm:h-72 xl:h-80">
        <Image
          src={imgURL}
          alt={`${title} architecture diagram`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Project information */}
      <div className="flex flex-1 flex-col border-t border-slate-200 p-6 dark:border-slate-600">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7AB0A]">
          AWS Project
        </p>

        <h4 className="mt-2 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <TechnologyTags technologies={technologies} />

        <OutcomeList outcomes={outcomes} />

        <div className="mt-auto pt-8">
          <a
            href={mediumURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read the ${title} case study on Medium`}
            className="inline-flex items-center gap-2 rounded-full border border-[#F7AB0A] px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-[#F7AB0A] hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:ring-offset-2 dark:text-white dark:focus:ring-offset-slate-700"
          >
            Read Case Study
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </li>
  )
}

/* -------------------------------------------------------------------------- */
/*                             Technology Tags                               */
/* -------------------------------------------------------------------------- */

type TechnologyTagsProps = {
  technologies: string[]
}

const TechnologyTags = ({ technologies }: TechnologyTagsProps) => {
  return (
    <div className="mt-6">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-slate-100">
        Technologies
      </p>

      <ul className="mt-3 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"
          >
            {technology}
          </li>
        ))}
      </ul>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              Outcome List                                  */
/* -------------------------------------------------------------------------- */

type OutcomeListProps = {
  outcomes: string[]
}

const OutcomeList = ({ outcomes }: OutcomeListProps) => {
  return (
    <div className="mt-6">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-800 dark:text-slate-100">
        Key Outcomes
      </p>

      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F7AB0A]"
              aria-hidden="true"
            />

            <span>{outcome}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Projects
