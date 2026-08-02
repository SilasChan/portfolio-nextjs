"use client"

import React from "react"
import Image from "next/image"
import { SOCIALS } from "@/constants"

const FOOTER_LINKS = [
  {
    id: "about",
    label: "About",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "certifications",
    label: "Certifications",
  },
]

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (!element) {
      console.warn(`Section not found: #${sectionId}`)
      return
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <footer className="bg-[#F7AB0A] text-slate-900 dark:bg-slate-900 dark:text-slate-300">
      <div className="max-container padding-container py-12 lg:py-16">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          {/* Footer navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-2 md:justify-start">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="rounded-full px-4 py-2 text-sm font-bold transition duration-200 hover:bg-black/10 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:hover:bg-white/10 dark:hover:text-white dark:focus:ring-amber-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <ul className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <li key={social.key}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Silas Chan on ${social.key}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-[#F7AB0A] dark:bg-slate-700 dark:hover:bg-[#F7AB0A] dark:focus:ring-amber-400 dark:focus:ring-offset-slate-900"
                >
                  <Image
                    src={social.imgURL}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                    className="invert dark:invert-0"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-8 border-black/15 dark:border-slate-700" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm md:flex-row md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Silas Chan. All rights reserved.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="font-semibold transition hover:text-white dark:hover:text-[#F7AB0A]"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
