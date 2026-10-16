import Image from "next/image"
import type { CloudProject } from "@/data/cloudProjects"

export default function CloudProjectCard({
  title,
  imgURL,
  description,
  technologies,
  outcomes,
  mediumURL,
}: CloudProject) {
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

        <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {title}
        </h3>

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

type TechnologyTagsProps = {
  technologies: string[]
}

export function TechnologyTags({ technologies }: TechnologyTagsProps) {
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

type OutcomeListProps = {
  outcomes: string[]
}

export function OutcomeList({ outcomes }: OutcomeListProps) {
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
