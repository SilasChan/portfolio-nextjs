import React from "react"
import Image from "next/image"
import Button from "./Button"

const About = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 bg-[#f7f7f7]">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] pb-20">
        About
      </div>
      <div className="flex flex-col gap-20 md:gap-28 xl:flex-row">
        <div className="flex-1 flexCenter flex-col m-auto ">
          <p className="mb-8">
            I am<span className="font-extrabold"> an IT Specialist</span>,
            utilizing my expert knowledge of computer hardware and operating
            systems to design solutions for specific problems and improve
            computer performance. I am constantly seeking opportunities to
            enhance my expertise and stay up-to-date with new technologies,
            concepts, and solutions.
          </p>
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
          />
        </div>
        <div className="flex-1 flexCenter">
          <Image
            className="w-auto rounded-full shadow-sm"
            src="/self_canva.png"
            alt="about"
            height={333}
            width={333}
          />
        </div>
      </div>
    </section>
  )
}

export default About
