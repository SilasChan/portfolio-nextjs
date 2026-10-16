import Link from "next/link"
import type { Metadata } from "next"

import NetworkingLabCard from "@/components/NetworkingLabCard"
import { networkingLabs } from "@/data/networkingLabs"

export const metadata: Metadata = {
  title: "Networking Labs | Silas Chan",
  description:
    "Explore hands-on Cisco networking labs covering VLANs, routing, switching, network security and troubleshooting.",
}

export default function NetworkingPage() {
  return (
    <section className="min-h-screen bg-[#f7f7f7] px-6 pb-32 pt-28 dark:bg-slate-800 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* Back to Home */}
        <Link
          href="/"
          className="text-sm font-semibold text-slate-600 transition hover:text-[#F7AB0A] dark:text-slate-300"
        >
          ← Back to Home
        </Link>

        {/* Page heading */}
        <div className="mb-12 mt-10">
          <p className="font-semibold uppercase tracking-[0.3em] text-[#F7AB0A]">
            Projects & Labs
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Networking
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Hands-on networking labs covering routing, switching, VLANs, IP
            addressing, network services and troubleshooting.
          </p>
        </div>

        {/* Networking Lab Gallery */}
        <div>
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Networking Labs
            </h2>

            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300">
              {networkingLabs.length}{" "}
              {networkingLabs.length === 1 ? "Lab" : "Labs"}
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {networkingLabs.map((lab) => (
              <NetworkingLabCard key={lab.slug} {...lab} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
