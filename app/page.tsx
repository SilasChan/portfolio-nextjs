// import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Hero from "@/components/Hero"

import Certifications from "@/components/Certifications"
import Skills from "@/components/Skills"
import React from "react"

const page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <section id="hero" className="pt-[80px]">
          <Hero />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="skills-section">
          <Skills />
        </section>
        <section id="certificate-section">
          <Certifications />
        </section>
      </main>
    </div>
  )
}

export default page

// import Navbar from '../components/Navbar'
// import About from '../components/About'
// import Contact from '../components/Contact'
// import { Certificate } from "crypto"

// const MainPage = () => {
//   return (

//   )
// }

// export default MainPage

// home
// About
// Skills
// Certificate
