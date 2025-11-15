"use client"

import React from "react"
import { Certificates } from "@/constants"
import Image from "next/image"

type Certificate = {
  title: string
  icon: string
  status?: "earned" | "undertaking"
}

const Certifications = () => {
  const earnedCerts = Certificates.filter(
    (c: Certificate) => c.status !== "undertaking"
  )
  const undertakingCerts = Certificates.filter(
    (c: Certificate) => c.status === "undertaking"
  )

  return (
    <section className="max-container padding-container bg-[#f7f7f7] gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* ====== Title ====== */}
      <div className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] pb-20">
        Certifications
      </div>

      {/* ====== Earned Certifications Grid ====== */}
      <ul className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {earnedCerts.map((item) => (
          <CertificationItem
            key={item.title}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </ul>

      {/* ====== Undertaking Section ====== */}
      {undertakingCerts.length > 0 && (
        <div className="mt-16 rounded-2xl bg-gray-100 border border-gray-300 px-6 py-5 shadow-sm">
          {/* Undertaking Header */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z"
                />
              </svg>
            </div>

            <span className="text-xs font-semibold tracking-wide uppercase text-gray-600">
              Certification undertaking
            </span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-4">
            The following certifications are currently in progress or planned.
            They are listed here to reflect my ongoing learning path and should
            not be treated as completed credentials.
          </p>

          {/* ====== Undertaking Cards Grid (same size as earned) ====== */}
          <ul className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
            {undertakingCerts.map((item) => (
              <UndertakingItem
                key={item.title}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Certifications

/* ---------------------------------------------------------------------- */
/* ======================  Earned Certification Card  ===================== */
/* ---------------------------------------------------------------------- */

type CertificationItemProps = {
  title: string
  icon: string
}

const CertificationItem = ({ title, icon }: CertificationItemProps) => {
  return (
    <li
      className="
      relative flex w-full flex-1 flex-col items-center text-center
      shadow-[0_3px_10px_rgba(0,0,0,0.2)]
      rounded-2xl p-10
      group transition duration-[1200ms]
      hover:bg-[#F7AB0A]
    "
    >
      <div
        className="
        rounded-full p-5 bg-[#F7AB0A]
        absolute -top-8
        group-hover:bg-black
        transition
      "
      >
        <Image src={icon} alt={title} width={64} height={64} />
      </div>

      <h3 className="bold-16 lg:bold-22 mt-12 capitalize group-hover:text-white">
        {title}
      </h3>
    </li>
  )
}

/* ---------------------------------------------------------------------- */
/* ======================  Undertaking Certification Card  =============== */
/* ---------------------------------------------------------------------- */

type UndertakingItemProps = {
  title: string
  icon: string
}

const UndertakingItem = ({ title, icon }: UndertakingItemProps) => {
  return (
    <li
      className="
      relative flex w-full flex-1 flex-col items-center text-center
      rounded-2xl p-10
      bg-[#FAFAFA]
      border border-dashed border-gray-300
      shadow-[0_3px_10px_rgba(0,0,0,0.12)]
      group transition duration-700
      hover:bg-[#F5F5F5]
    "
    >
      {/* grey badge bubble */}
      <div
        className="
        rounded-full p-5 bg-gray-200
        absolute -top-8
        group-hover:bg-gray-700
        transition
      "
      >
        <Image src={icon} alt={title} width={64} height={64} />
      </div>

      <h3 className="bold-16 lg:bold-22 mt-12 capitalize text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-gray-600">
        In progress / undertaking
      </p>
    </li>
  )
}
