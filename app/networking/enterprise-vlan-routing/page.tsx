import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  ArrowLeft,
  CheckCircle2,
  Network,
  Router,
  ShieldCheck,
  GitBranch,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Enterprise VLAN & Inter-VLAN Routing | Silas Chan",
  description:
    "Cisco Packet Tracer networking lab featuring VLANs, VLSM, router-on-a-stick, EtherChannel and switch security.",
}

const technologies = [
  "Cisco Packet Tracer",
  "Cisco IOS",
  "VLAN",
  "VLSM",
  "802.1Q Trunking",
  "Router-on-a-Stick",
  "PAgP EtherChannel",
  "SSH",
  "Port Security",
]

const implementations = [
  {
    title: "VLAN Segmentation",
    description:
      "Configured separate VLANs for user devices and management traffic, with a dedicated native VLAN.",
    icon: Network,
  },
  {
    title: "Inter-VLAN Routing",
    description:
      "Used router subinterfaces and 802.1Q tagging to enable communication between VLANs.",
    icon: Router,
  },
  {
    title: "EtherChannel",
    description:
      "Configured PAgP EtherChannel between switches to combine physical links into a logical connection.",
    icon: GitBranch,
  },
  {
    title: "Switch Security",
    description:
      "Applied SSH management, port security, PortFast and BPDU Guard as part of the lab configuration.",
    icon: ShieldCheck,
  },
]

export default function EnterpriseVlanRoutingPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] px-6 pb-32 pt-28 dark:bg-slate-800 lg:pt-32">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/networking"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-[#F7AB0A] dark:text-slate-300"
        >
          <ArrowLeft size={16} />
          Back to Networking Labs
        </Link>

        {/* Header */}
        <header className="mt-12">
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#F7AB0A]">
              Networking Lab 01
            </p>

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700 dark:bg-green-500/15 dark:text-green-300">
              <CheckCircle2 size={14} />
              Completed
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Enterprise VLAN & Inter-VLAN Routing
          </h1>

          <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A hands-on Cisco Packet Tracer lab focused on designing and
            configuring a segmented network using VLSM, VLANs, inter-VLAN
            routing, EtherChannel and Layer 2 security features.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </header>

        {/* Network Topology */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Network Topology
          </h2>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-600 sm:p-8">
            <div className="relative h-64 w-full sm:h-96 lg:h-[480px]">
              <Image
                src="/labs/networking/enterprise-vlan-topology.png"
                alt="Cisco Packet Tracer topology showing router R5, switches S5 and S6, PC-A in VLAN 10 and PC-B in VLAN 20"
                fill
                sizes="(max-width: 768px) 100vw, 1000px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Lab topology: Router R5, switches S5 and S6, and two end-user
            devices across separate VLANs.
          </p>
        </section>

        {/* Overview */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Project Overview
          </h2>

          <div className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-700 sm:p-9">
            <p className="leading-8 text-slate-600 dark:text-slate-300">
              This lab simulates a small enterprise network requiring logical
              segmentation, efficient IP address allocation, inter-VLAN
              communication and secure switch configuration. Cisco Packet Tracer
              was used to build and configure the network using Cisco IOS
              commands.
            </p>
          </div>
        </section>

        {/* Addressing */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            IP Addressing & VLAN Design
          </h2>

          <div className="overflow-x-auto rounded-2xl bg-white shadow-sm dark:bg-slate-700">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white">
                <tr>
                  <th className="px-6 py-4">VLAN</th>
                  <th className="px-6 py-4">Purpose</th>
                  <th className="px-6 py-4">Subnet</th>
                  <th className="px-6 py-4">Host Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600 dark:divide-slate-600 dark:text-slate-300">
                <tr>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">User1</td>
                  <td className="px-6 py-4">172.16.64.0/21</td>
                  <td className="px-6 py-4">1,025</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">20</td>
                  <td className="px-6 py-4">User2</td>
                  <td className="px-6 py-4">172.16.72.0/23</td>
                  <td className="px-6 py-4">505</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">30</td>
                  <td className="px-6 py-4">Management</td>
                  <td className="px-6 py-4">172.16.74.0/25</td>
                  <td className="px-6 py-4">120</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">999</td>
                  <td className="px-6 py-4">Native VLAN</td>
                  <td className="px-6 py-4">Not assigned</td>
                  <td className="px-6 py-4">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Implementation */}
        <section className="mt-16">
          <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
            Technical Implementation
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {implementations.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-700"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-400/15 dark:text-[#F7AB0A]">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Verification */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
            Verification & Testing
          </h2>

          <div className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-700 sm:p-9">
            <p className="leading-8 text-slate-600 dark:text-slate-300">
              Network verification includes checking VLAN assignments, trunk
              interfaces, EtherChannel status, routing interfaces, and
              connectivity between end-user devices. Configuration outputs and
              connectivity test screenshots can be added here to document the
              results.
            </p>

            <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-5 text-sm text-slate-500 dark:border-slate-500 dark:text-slate-400">
              Verification screenshots and Cisco IOS command outputs will be
              added in a future update.
            </div>
          </div>
        </section>

        {/* Footer navigation */}
        <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-600">
          <Link
            href="/networking"
            className="inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-[#F7AB0A] dark:text-slate-200"
          >
            <ArrowLeft size={18} />
            Back to Networking Labs
          </Link>
        </div>
      </div>
    </main>
  )
}
