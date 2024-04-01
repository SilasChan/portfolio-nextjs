import { FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="max-conatiner padding-conatiner bg-[#F7AB0A] bg-cover bg-center bg-no-repeat px-6 pt-24 pb-8 text-black">
      <div className="flex flexBetween flex-col gap-14 md:flex-row pb-16">
        <ul>
          {FOOTER_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="p-4 text-[15px] font-[500] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <ul className="regular-14 flex gap-4 text-black">
          {SOCIALS.map((social) => (
            <Link
              href={social.href}
              key={social.key}
              className="h-10 w-10 boder=[0.01rem] border-gary-20 flexCenter bg-black rounded-full hover:text-white transition-all"
            >
              <Image
                src={social.imgURL}
                alt={social.key}
                width={20}
                height={20}
                className="invert-[100]"
              />
            </Link>
          ))}
        </ul>
      </div>
      <hr className="border-none outline-none h-[0.01rem] bg-gray-20 my-8" />

      <div className="text-center text-black">
        This is made by Silas Chan@ 2024
      </div>
    </footer>
  )
}

export default Footer
