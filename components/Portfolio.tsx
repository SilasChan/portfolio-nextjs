import React from "react"
import { PORTFOLIO } from "@/constants"
import Image from "next/image"
import Button from "./Button"

const Portfolio = () => {
  return (
    <section className="max-container padding-container bg-[#f7f7f7] gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Portfolio Header */}
      <div className="text-center pb-16">
        <h2 className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] pb-20">
          PORTFOLIO
        </h2>
      </div>

      {/* Portfolio Grid */}
      <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {PORTFOLIO.map((portfolio) => (
          <PortfolioItem
            key={portfolio.title}
            title={portfolio.title}
            imgURL={portfolio.ImgURL}
            description={portfolio.description}
            technologies={portfolio.technologies}
            achievements={portfolio.achievements}
            duration={portfolio.duration}
          />
        ))}
      </ul>
    </section>
  )
}

type PortfolioItemProps = {
  title: string
  imgURL: string
  description: string
  technologies: string[] | undefined
  achievements: string[] | undefined
  duration: string[] | undefined
}

const PortfolioItem = ({
  title,
  imgURL,
  description,
  technologies,
  achievements,
  duration,
}: PortfolioItemProps) => {
  return (
    <li className="relative group bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative w-full h-60 sm:h-72 md:h-80 xl:h-96 overflow-hidden rounded-t-xl">
        <Image
          src={imgURL}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-110 transition-all duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Portfolio Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-gray-800 text-lg">Technologies:</p>
            <p className="text-gray-600">{technologies.join(", ")}</p>
          </div>
        )}

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-gray-800 text-lg">Achievements:</p>
            <p className="text-gray-600">{achievements.join(", ")}</p>
          </div>
        )}

        {/* Duration */}
        {duration && duration.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold text-gray-800 text-lg">Duration:</p>
            <p className="text-gray-600">{duration.join(", ")}</p>
          </div>
        )}

        {/* Buttons */}
        {/* <div className="mt-6 flex gap-4">
          <Button
            type="button"
            title="Read More"
            icon="/more.svg"
            variant="btn_dark_rounded"
            action="read more"
          />
          <Button
            type="button"
            title="View Code"
            icon="/github.svg"
            variant="btn_white_rounded"
            action="view code"
          />
        </div> */}
      </div>
    </li>
  )
}

export default Portfolio
