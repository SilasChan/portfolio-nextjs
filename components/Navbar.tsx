"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, Cloud, Menu, Network, ShieldCheck, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

type NavLink = {
  id: string
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { id: "about", href: "#about", label: "About" },
  { id: "skills", href: "#skills", label: "Skills" },
  {
    id: "certifications",
    href: "#certifications",
    label: "Certifications",
  },
]

const PROJECT_CATEGORIES = [
  {
    label: "Cloud Computing",
    href: "/cloud",
    description: "AWS & Cloud Architecture",
    icon: Cloud,
  },
  {
    label: "Networking",
    href: "/networking",
    description: "Routing, Switching & DNS",
    icon: Network,
  },
  {
    label: "Cybersecurity",
    href: "/security",
    description: "SOC, Forensics & Security",
    icon: ShieldCheck,
  },
]

const NAVBAR_HEIGHT = 80

const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const dropdownRef = useRef<HTMLLIElement>(null)

  // Observe homepage sections only
  useEffect(() => {
    if (pathname !== "/") return

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

    return () => observer.disconnect()
  }, [pathname])

  // Close mobile menu when resizing
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

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!isProjectsOpen) return

    const handleOutsideClick = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProjectsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProjectsOpen(false)
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isProjectsOpen])

  const closeMenus = () => {
    setIsOpen(false)
    setIsProjectsOpen(false)
  }

  const scrollToSection = (href: string) => {
    closeMenus()

    if (pathname !== "/") {
      router.push(`/${href}`)
      return
    }

    const element = document.querySelector<HTMLElement>(href)
    if (!element) return

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    })

    window.history.replaceState(null, "", href)
  }

  const scrollToTop = () => {
    closeMenus()

    if (pathname !== "/") {
      router.push("/")
      return
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

    setActiveSection("")
  }

  const isProjectsActive = PROJECT_CATEGORIES.some(
    (category) => pathname === category.href,
  )

  const desktopClasses =
    "rounded-full px-4 py-2 text-sm font-bold transition duration-200"

  const mobileClasses =
    "w-full rounded-xl px-4 py-3 text-left text-base font-bold transition duration-200"

  const activeClasses =
    "bg-slate-900 text-white shadow-sm dark:bg-[#F7AB0A] dark:text-slate-950"

  const inactiveClasses =
    "text-slate-900 hover:bg-black/10 dark:text-slate-200 dark:hover:bg-white/10"

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-amber-500/20 bg-[#F7AB0A]/95 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/95">
      <div className="max-container padding-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Return to Home"
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

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 lg:flex">
            <ul className="flex items-center gap-1">
              {/* About */}
              <NavbarLink
                label="About"
                isActive={pathname === "/" && activeSection === "about"}
                onClick={() => scrollToSection("#about")}
              />

              {/* Projects Dropdown */}
              <li
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isProjectsOpen}
                  aria-controls="projects-dropdown"
                  onClick={() => setIsProjectsOpen((current) => !current)}
                  className={`${desktopClasses} flex items-center gap-2 ${
                    isProjectsActive ? activeClasses : inactiveClasses
                  }`}
                >
                  Projects
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isProjectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProjectsOpen && (
                  <div
                    id="projects-dropdown"
                    className="absolute right-0 top-full w-80 pt-3"
                  >
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                      {PROJECT_CATEGORIES.map((category) => {
                        const Icon = category.icon
                        const isActive = pathname === category.href

                        return (
                          <Link
                            key={category.href}
                            href={category.href}
                            onClick={closeMenus}
                            aria-current={isActive ? "page" : undefined}
                            className={`flex items-center gap-3 rounded-xl px-3 py-3 transition ${
                              isActive
                                ? "bg-amber-100 dark:bg-slate-700"
                                : "hover:bg-gray-100 dark:hover:bg-slate-700"
                            }`}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F7AB0A]/15 text-amber-600 dark:text-[#F7AB0A]">
                              <Icon size={20} />
                            </div>

                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white">
                                {category.label}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </li>

              {/* Skills / Certifications */}
              {NAV_LINKS.filter((link) => link.id !== "about").map((link) => (
                <NavbarLink
                  key={link.id}
                  label={link.label}
                  isActive={pathname === "/" && activeSection === link.id}
                  onClick={() => scrollToSection(link.href)}
                />
              ))}
            </ul>

            <div className="ml-3 flex items-center border-l border-black/15 pl-5 dark:border-slate-700">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-black/10 py-4 dark:border-slate-700 lg:hidden"
          >
            <ul className="flex flex-col gap-2">
              <NavbarLink
                label="About"
                isActive={pathname === "/" && activeSection === "about"}
                isMobile
                onClick={() => scrollToSection("#about")}
              />

              {/* Mobile Projects Heading */}
              <li>
                <p className="px-4 pb-2 pt-3 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                  Projects & Labs
                </p>
              </li>

              {PROJECT_CATEGORIES.map((category) => {
                const Icon = category.icon
                const isActive = pathname === category.href

                return (
                  <li key={category.href}>
                    <Link
                      href={category.href}
                      onClick={closeMenus}
                      aria-current={isActive ? "page" : undefined}
                      className={`${mobileClasses} flex items-center gap-3 ${
                        isActive ? activeClasses : inactiveClasses
                      }`}
                    >
                      <Icon size={20} />
                      {category.label}
                    </Link>
                  </li>
                )
              })}

              {NAV_LINKS.filter((link) => link.id !== "about").map((link) => (
                <NavbarLink
                  key={link.id}
                  label={link.label}
                  isActive={pathname === "/" && activeSection === link.id}
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
        aria-current={isActive ? "location" : undefined}
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
