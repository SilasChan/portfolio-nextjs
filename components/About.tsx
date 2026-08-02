import React from "react"
import Image from "next/image"

const highlights = [
  {
    value: "6+",
    label: "Years of Enterprise IT Experience",
    icon: "💼",
  },
  {
    value: "5+",
    label: "Professional Certifications",
    icon: "🏆",
  },
  {
    value: "10+",
    label: "Hands-on Projects & Labs",
    icon: "☁️",
  },
  {
    value: "2",
    label: "Marathon Finishes",
    icon: "🏃",
  },
]

const About = () => {
  return (
    <section
      id="about"
      className="max-container padding-container bg-[#f7f7f7] py-10 pb-32 dark:bg-slate-800 lg:py-20"
    >
      {/* Section heading */}
      <div className="pb-16 text-center text-lg font-bold uppercase tracking-[1rem] text-[#F7AB0A] lg:pb-20">
        About
      </div>

      {/* Main content */}
      <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-20">
        {/* Left section */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            More Than Just IT
          </h2>

          <div className="space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300 md:text-lg">
            <p>
              With over{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                six years of enterprise IT experience
              </span>
              , I have built a strong foundation in IT support, infrastructure
              and end-user services across multinational organisations. These
              experiences have strengthened my technical problem-solving,
              communication and adaptability.
            </p>

            <p>
              I am currently based in{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Brisbane, Australia
              </span>
              , pursuing a Master of Information Technology, majoring in Network
              and Cyber Security at Griffith University. Alongside my studies, I
              am developing practical skills through AWS cloud projects, Cisco
              networking concepts and cyber security labs.
            </p>

            <p>
              Outside of technology, I enjoy marathon training and volunteering
              as a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Griffith Mates Senior Buddy
              </span>
              . These experiences have strengthened my discipline, resilience,
              teamwork and communication—qualities I also bring to technical
              challenges.
            </p>

            <p>
              My goal is to build a career as a{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Cloud Engineer
              </span>
              , combining cloud infrastructure, networking and cyber security to
              create reliable and secure solutions while continuously learning
              and improving.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center justify-center">
          <Image
            src="/self_profile_new.jpg"
            alt="Silas Chan"
            width={400}
            height={400}
            className="
      h-auto
      w-[340px]
      lg:w-[400px]
      rounded-full
      border-8
      border-white
      shadow-2xl
      dark:border-slate-700
    "
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {highlights.map((highlight) => (
          <div
            key={highlight.label}
            className="rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-700"
          >
            <div className="text-3xl" aria-hidden="true">
              {highlight.icon}
            </div>

            <h3 className="mt-3 text-4xl font-bold text-[#F7AB0A]">
              {highlight.value}
            </h3>

            <p className="mt-3 text-sm font-medium leading-5 text-gray-600 dark:text-gray-300">
              {highlight.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
