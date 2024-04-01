import React from "react"
import { Certificates } from "@/constants"
import Image from "next/image"

const Certifications = () => {
  return (
    <section className="max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row bg-[#f7f7f7]">
      {/* title */}
      <div className="text-center bold-18 uppercase tracking-[1rem] text-[#F7AB0A] pb-20">
        Certifications
      </div>
      <ul className="mt-10 grid gap-20 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
        {Certificates.map((item) => (
          <CertificationItem
            key={item.title}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </ul>
    </section>
  )
}

export default Certifications

type CertificationItem = {
  title: string
  icon: string
}

const CertificationItem = ({ title, icon }: CertificationItem) => {
  return (
    <li className="relative flex w-full flex-1 flex-col items-center text-center shadow-[0_3px_10px_rgba(0,0,0,0.2)] rounded-2xl p-10 hover:bg-[#F7AB0A] group duration-[1200ms] transition">
      <div className="rounded-full p-5 bg-[#F7AB0A] absolute -top-8 group-hover:bg-black">
        <Image src={icon} alt="map" width={64} height={64} />
      </div>
      <h3 className="bold-16 lg:bold-22 mt-12 capitalize group-hover:text-white ">
        {title}
      </h3>
      {/* <p className="regular-16 text-gray-30 mt-4 group-hover:text-white">
        {description}
      </p> */}
    </li>
  )
}
