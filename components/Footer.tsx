"use client"
import React, { useState, useEffect } from "react"
import { FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer: React.FC = () => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = FOOTER_LINKS.map((link) => {
        const element = document.getElementById(link.sectionId) // Using sectionId to query section
        return element ? { id: link.key, top: element.offsetTop - 100 } : null
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId) // Use sectionId directly
    if (element) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <footer className="bg-[#F7AB0A] bg-cover bg-center bg-no-repeat px-6 pt-24 pb-8 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-14 pb-16">
          <ul className="flex flex-wrap justify-center md:justify-start">
            {FOOTER_LINKS.map((link) => (
              <li key={link.key}>
                <button
                  onClick={() => scrollToSection(link.sectionId)} // Pass sectionId instead of href
                  className={`p-4 text-sm font-medium ${
                    activeSection === link.key
                      ? "text-white bg-dark-500"
                      : "text-black hover:text-white hover:bg-dark-500"
                  } transition-colors`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {SOCIALS.map((social) => (
              <li key={social.key}>
                <Link
                  href={social.href}
                  className="flex items-center justify-center h-10 w-10 bg-black rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src={social.imgURL}
                    alt={social.key}
                    width={20}
                    height={20}
                    className="invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-gray-200 my-8" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Silas Chan. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
