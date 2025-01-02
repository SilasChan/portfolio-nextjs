"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

type NavLink = {
  id: string
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { id: "about", href: "#about-section", label: "About" },
  { id: "skills", href: "#skills-section", label: "Skills" },
  { id: "certificate", href: "#certificate-section", label: "Certificate" },
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = NAV_LINKS.map((link) => {
        const element = document.querySelector(link.href)
        return element ? { id: link.id, top: element.offsetTop - 100 } : null
      }).filter(
        (section): section is NonNullable<typeof section> => section !== null
      )

      const currentSection = sections.find(
        (section) => scrollPosition >= section.top
      )
      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial active section
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className="padding-container fixed top-0 left-0 right-0 z-30 bg-[#F7AB0A] shadow-xl ring-1 ring-slate-100 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <button
          onClick={() => scrollToSection("#home-section")}
          className="relative flex items-center"
        >
          <Link href="/" className="relative flex items-center">
            <Image
              src="/apple-touch-icon.png"
              alt="Logo"
              width={40} // Adjust width
              height={40} // Adjust height
              className="rounded-full"
            />
          </Link>
        </button>
        <ul className="hidden lg:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.id}
              href={link.href}
              label={link.label}
              isActive={activeSection === link.id}
              onClick={() => scrollToSection(link.href)}
            />
          ))}
        </ul>
        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          <Image
            src={isOpen ? "/close.svg" : "/menu.svg"}
            alt={isOpen ? "close menu" : "open menu"}
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                label={link.label}
                isActive={activeSection === link.id}
                isMobile
                onClick={() => scrollToSection(link.href)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

type NavLinkProps = {
  href: string
  label: string
  isActive: boolean
  isMobile?: boolean
  onClick: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive,
  isMobile,
  onClick,
}) => {
  const baseClasses =
    "text-sm font-medium transition-colors duration-300 cursor-pointer"
  const mobileClasses = "block px-3 py-2 rounded-md"
  const desktopClasses = "px-4 py-1 rounded-full"

  const classes = `${baseClasses} ${
    isMobile ? mobileClasses : desktopClasses
  } ${
    isActive
      ? "bg-dark-500 text-white"
      : "text-black hover:bg-dark-500 hover:text-white"
  }`

  return (
    <li className={classes} onClick={onClick}>
      {label}
    </li>
  )
}

export default Navbar
