import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import type { NetworkingLab } from "@/data/networkingLabs"

export default function NetworkingLabCard({
  slug,
  title,
  description,
  imgURL,
  technologies,
  status,
}: NetworkingLab) {
  return (
    <li className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700">
      <div className="relative h-64 w-full overflow-hidden bg-white sm:h-72">
        <Image
          src={imgURL}
          alt={`${title} network topology`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-slate-200 p-6 dark:border-slate-600">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7AB0A]">
            Networking Lab
          </p>

          {status === "Completed" && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-500/15 dark:text-green-300">
              <CheckCircle2 size={14} />
              Completed
            </span>
          )}
        </div>

        <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <Link
            href={`/networking/${slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#F7AB0A] px-5 py-2.5 text-sm font-bold text-slate-800 transition hover:bg-[#F7AB0A] hover:text-slate-950 dark:text-white"
          >
            View Lab Details
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </li>
  )
}
