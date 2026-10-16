import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cybersecurity Labs | Silas Chan",
  description: "Security monitoring, investigation, and cybersecurity labs.",
}

export default function SecurityPage() {
  return (
    <section className="min-h-screen bg-[#f7f7f7] px-6 py-24 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-sm text-gray-600 hover:text-[#F7AB0A] dark:text-gray-300"
        >
          ← Back to Home
        </Link>

        <div className="mt-10">
          <p className="font-semibold text-[#F7AB0A]">PROJECTS & LABS</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">
            Cybersecurity
          </h1>
          <p className="mt-5 max-w-3xl text-gray-600 dark:text-gray-300">
            Explore hands-on cybersecurity labs covering security monitoring,
            digital forensics, incident investigation, and network security.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Security Labs
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Security investigation case studies and technical lab documentation
            will be added here.
          </p>
        </div>
      </div>
    </section>
  )
}
