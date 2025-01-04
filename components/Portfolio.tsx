import React from "react"
import { PORTFOLIO } from "@/constants"
import Image from "next/image"
import Button from "./Button"

const Portfolio = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] pb-20">
        Portfolio
      </div>
      <ul className="mt-12 grid gap-14 md:grid-cols-2 xl:grid-cols-2 w-[95%] m-auto">
        {PORTFOLIO.map((portfolio) => (
          <PortfolioItem
            key={portfolio.title}
            title={portfolio.title}
            imgURL={portfolio.ImgURL}
            description={portfolio.description}
          />
        ))}
      </ul>
    </section>
  )
}

type PortfolioItem = {
  title: string
  imgURL: string
  description: string
}

const PortfolioItem = ({ title, imgURL, description }: PortfolioItem) => {
  return (
    <li className="relative flex w-full flex-1 flex-col rounded-2xl border overflow-hidden group">
      <div className="group-hover:scale-110 transition-all duration-1000">
        <Image src={imgURL} alt="map" width={444} height={444} />
      </div>

      <div className="px-6 py-4">
        <h3 className="bold-18 lg:bold-20 my-4 capitalize">{title}</h3>
        <p className="regular-16 text-gray-30 mb-4">{description}</p>
        <div className="flex gap-1">
          <Button
            type="button"
            title="Read more"
            icon="/more.svg"
            variant="btn_dark_rounded"
            action={() => console.log("Read more action")}
          />
          <Button
            type="button"
            title="View code"
            icon="/github.svg"
            variant="btn_white_rounded"
            action={() => console.log("View code action")}
          />
        </div>
      </div>
    </li>
  )
}

export default Portfolio
