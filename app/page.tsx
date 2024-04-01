import About from "@/components/About"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Certifications from "@/components/Certifications"
import Skills from "@/components/Skills"
import React from "react"

const page = () => {
  return (
    <main>
      <>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Portfolio />
        {/* <Testimonial /> */}
      </>
    </main>
  )
}

export default page
