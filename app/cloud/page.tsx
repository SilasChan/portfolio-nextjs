import Link from "next/link"
import type { Metadata } from "next"
import CloudProjectCard from "@/components/CloudProjectCard"
import { cloudProjects } from "@/data/cloudProjects"

export const metadata: Metadata = {
  title: "Cloud Projects | Silas Chan",
  description:
    "Explore hands-on AWS cloud architecture, serverless automation and cloud computing projects by Silas Chan.",
}

export default function CloudPage() {
  return (
    <section className="min-h-screen bg-[#f7f7f7] px-6 pb-32 pt-28 dark:bg-slate-800 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 transition hover:text-[#F7AB0A] dark:text-slate-300"
        >
          ← Back to Home
        </Link>

        <div className="mb-12 mt-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#F7AB0A]">
            Projects & Labs
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Cloud Computing
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Explore hands-on AWS projects covering cloud architecture, high
            availability, scalability, serverless automation, and cloud
            services.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cloudProjects.map((project) => (
            <CloudProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </section>
  )
}
