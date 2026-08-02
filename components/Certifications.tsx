"use client"

import React from "react"
import Image from "next/image"
import { Award, Clock3 } from "lucide-react"
import { Certificates } from "@/constants/index"

type CertificateStatus = "earned" | "undertaking"

type Certificate = {
  title: string
  icon: string
  status: CertificateStatus
  issuer?: string
  credentialURL?: string
}

const Certifications = () => {
  const certificates = Certificates as Certificate[]

  const earnedCerts = certificates.filter(
    (certificate) => certificate.status === "earned",
  )

  const undertakingCerts = certificates.filter(
    (certificate) => certificate.status === "undertaking",
  )

  return (
    <section
      id="certifications"
      className="max-container padding-container bg-[#f7f7f7] py-10 pb-32 dark:bg-slate-800 lg:py-20"
    >
      {/* Section heading */}
      <div className="pb-16 text-center lg:pb-20">
        <h2 className="bold-18 uppercase tracking-[1rem] text-[#F7AB0A]">
          Certifications
        </h2>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
          Professional Certifications
        </h3>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          Industry certifications supporting my development across cloud
          computing, Microsoft infrastructure, cyber security and IT service
          management.
        </p>
      </div>

      {/* Earned certifications */}
      <div>
        <CertificationSectionHeader
          icon={<Award size={22} aria-hidden="true" />}
          title="Earned Certifications"
          description="Completed and earned professional credentials."
        />

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {earnedCerts.map((certificate) => (
            <EarnedCertificationCard
              key={certificate.title}
              title={certificate.title}
              icon={certificate.icon}
              issuer={certificate.issuer}
              credentialURL={certificate.credentialURL}
            />
          ))}
        </ul>
      </div>

      {/* Certifications in progress */}
      {undertakingCerts.length > 0 && (
        <div className="mt-24">
          <CertificationSectionHeader
            icon={<Clock3 size={22} aria-hidden="true" />}
            title="Currently Preparing"
            description="Certifications currently in progress as part of my ongoing professional development."
          />

          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {undertakingCerts.map((certificate) => (
              <UndertakingCertificationCard
                key={certificate.title}
                title={certificate.title}
                icon={certificate.icon}
                issuer={certificate.issuer}
              />
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/60 px-6 py-5 dark:border-slate-600 dark:bg-slate-700/40">
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              These certifications are currently being studied or prepared for
              and should not be treated as completed credentials.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

type CertificationSectionHeaderProps = {
  icon: React.ReactNode
  title: string
  description: string
}

const CertificationSectionHeader = ({
  icon,
  title,
  description,
}: CertificationSectionHeaderProps) => {
  return (
    <div className="mb-10 flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300">
        {icon}
      </div>

      <div>
        <h4 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  )
}

type EarnedCertificationCardProps = {
  title: string
  icon: string
  issuer?: string
  credentialURL?: string
}

const EarnedCertificationCard = ({
  title,
  icon,
  issuer,
  credentialURL,
}: EarnedCertificationCardProps) => {
  return (
    <li className="group flex min-h-[300px] flex-col items-center rounded-2xl bg-white p-7 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700">
      {/* Certification badge */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-amber-100 p-4 transition duration-300 group-hover:scale-105 dark:bg-amber-400/15">
        <Image
          src={icon}
          alt={`${title} certification badge`}
          width={88}
          height={88}
          className="h-auto max-h-[88px] w-auto object-contain"
        />
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#F7AB0A]">
        Earned
      </p>

      <h5 className="mt-2 text-xl font-bold leading-7 text-slate-900 dark:text-white">
        {title}
      </h5>

      {issuer && (
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
          {issuer}
        </p>
      )}

      {credentialURL && (
        <div className="mt-auto pt-7">
          <a
            href={credentialURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Verify ${title} certification`}
            className="inline-flex items-center gap-2 rounded-full border border-[#F7AB0A] px-4 py-2 text-sm font-bold text-slate-800 transition hover:bg-[#F7AB0A] hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-[#F7AB0A] focus:ring-offset-2 dark:text-white dark:focus:ring-offset-slate-700"
          >
            Verify Credential
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </li>
  )
}

type UndertakingCertificationCardProps = {
  title: string
  icon: string
  issuer?: string
}

const UndertakingCertificationCard = ({
  title,
  icon,
  issuer,
}: UndertakingCertificationCardProps) => {
  return (
    <li className="group flex min-h-[300px] flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white/70 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg dark:border-slate-600 dark:bg-slate-700/60 dark:hover:border-amber-400/50">
      {/* Certification badge */}
      <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 p-4 transition duration-300 group-hover:scale-105 dark:bg-slate-800">
        <Image
          src={icon}
          alt={`${title} certification badge`}
          width={88}
          height={88}
          className="h-auto max-h-[88px] w-auto object-contain opacity-85"
        />
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-300">
        In Progress
      </p>

      <h5 className="mt-2 text-xl font-bold leading-7 text-slate-900 dark:text-white">
        {title}
      </h5>

      {issuer && (
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
          {issuer}
        </p>
      )}

      <div className="mt-auto pt-7">
        <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Currently Preparing
        </span>
      </div>
    </li>
  )
}

export default Certifications
