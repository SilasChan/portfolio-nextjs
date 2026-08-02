"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

type NavLink = {
  id: string
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  {
    id: "about",
    href: "#about",
    label: "About",
  },
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
  },
  {
    id: "skills",
    href: "#skills",
    label: "Skills",
  },
  {
    id: "certifications",
    href: "#certifications",
    label: "Certifications",
  },
]

const NAVBAR_HEIGHT = 80

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sectionElements = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((element): element is HTMLElement => element !== null)

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          )

        const mostVisibleSection = visibleEntries[0]

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.target.id)
        }
      },
      {
        rootMargin: `-${NAVBAR_HEIGHT}px 0px -55% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sectionElements.forEach((section) => observer.observe(section))

    return () => {
      sectionElements.forEach((section) => observer.unobserve(section))
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", closeMenuOnResize)

    return () => {
      window.removeEventListener("resize", closeMenuOnResize)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector<HTMLElement>(href)

    if (!element) return

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })

    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setIsOpen(false)
    setActiveSection("")
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-amber-500/20 bg-[#F7AB0A]/95 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
      <div className="max-container padding-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Return to the top of the page"
            className="rounded-full transition duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-[#F7AB0A] dark:focus:ring-amber-400 dark:focus:ring-offset-slate-900"
          >
            <Image
              src="/apple-touch-icon.png"
              alt="Silas Chan logo"
              width={42}
              height={42}
              priority
              className="rounded-full"
            />
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-3 lg:flex">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavbarLink
                  key={link.id}
                  label={link.label}
                  isActive={activeSection === link.id}
                  onClick={() => scrollToSection(link.href)}
                />
              ))}
            </ul>

            <div className="ml-3 flex items-center border-l border-black/15 pl-5 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-slate-900 transition hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-slate-900 lg:hidden dark:text-white dark:hover:bg-white/10 dark:focus:ring-amber-400"
          >
            {isOpen ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu size={26} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-black/10 py-4 dark:border-slate-700 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <NavbarLink
                  key={link.id}
                  label={link.label}
                  isActive={activeSection === link.id}
                  isMobile
                  onClick={() => scrollToSection(link.href)}
                />
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between rounded-xl bg-black/5 px-4 py-3 dark:bg-white/5">
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Appearance
              </span>

              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

type NavbarLinkProps = {
  label: string
  isActive: boolean
  isMobile?: boolean
  onClick: () => void
}

const NavbarLink = ({
  label,
  isActive,
  isMobile = false,
  onClick,
}: NavbarLinkProps) => {
  const desktopClasses =
    "rounded-full px-4 py-2 text-sm font-bold transition duration-200"

  const mobileClasses =
    "w-full rounded-xl px-4 py-3 text-left text-base font-bold transition duration-200"

  const activeClasses =
    "bg-slate-900 text-white shadow-sm dark:bg-[#F7AB0A] dark:text-slate-950"

  const inactiveClasses =
    "text-slate-900 hover:bg-black/10 dark:text-slate-200 dark:hover:bg-white/10"

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={`${isMobile ? mobileClasses : desktopClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
      >
        {label}
      </button>
    </li>
  )
}

export default Navbar
