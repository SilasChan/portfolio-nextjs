"use client"
import React from "react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="max-container padding-container bg-[#f7f7f7] gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Title */}
      <div className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] mb-10">
        Welcome
      </div>

      {/* Content */}
      <div className="grid gap-12 md:grid-cols-2 items-center md:gap-16 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-xl font-bold mb-4">Hello,</h4>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#F7AB0A] mb-2">
            I'm Silas Chan
          </h1>
          <h2 className="text-2xl lg:text-3xl font-bold capitalize text-[#F7AB0A] mb-6">
            A{" "}
            <span>
              <Typewriter
                words={["Coder", "Runner", "Worker"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="regular-16 text-gray-30 mb-8 max-w-[555px]">
            Solution-oriented, Performance-focused, Curious, Forward-thinking,
            Continuous learner, Adaptable
          </p>

          <div className="flex gap-4">
            <Button
              type="button"
              title="Download CV"
              icon="./download.svg"
              variant="btn_dark_rounded"
              action="download"
              href="/silasChan_resume.pdf"
            />
            <Button
              type="button"
              title="Contact Me"
              icon="/arrow-right.svg"
              variant="btn_white_rounded"
              action="contact"
              href="/"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.2)] p-5">
            <Image
              className="rounded-full shadow-sm"
              src="/silasBusinessCorp.png"
              alt="Silas Chan"
              width={333}
              height={333}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
