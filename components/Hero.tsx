"use client"

import React from "react"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import Button from "./Button"

const Hero = () => {
  return (
    <section className="max-container padding-container bg-[#f7f7f7] gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="mb-3 text-lg font-semibold text-gray-900">Hello,</p>

          <h1 className="mb-2 text-5xl font-bold leading-tight text-[#F7AB0A] lg:text-6xl">
            I&apos;m Silas Chan
          </h1>

          <h2 className="mb-6 min-h-[42px] text-3xl font-bold text-[#F7AB0A]">
            <Typewriter
              words={["Aspiring Cloud Engineer"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
            />
          </h2>

          <div className="max-w-xl space-y-5 text-base leading-8 text-gray-600 md:text-lg">
            <p>
              Based in Brisbane, Australia, I am pursuing a Master of
              Information Technology, majoring in Network and Cyber Security at
              Griffith University.
            </p>

            <p>
              With over six years of enterprise IT experience, I am building a
              career in cloud engineering, networking and cyber security.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
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
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[520px]">
            <Image
              src="/1909s.jpg"
              alt="Silas Chan"
              width={500}
              height={650}
              priority
              className="w-full h-auto rounded-[32px] border-8 border-white shadow-2xl
      dark:border-slate-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
