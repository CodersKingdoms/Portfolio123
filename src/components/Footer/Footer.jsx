import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div id="Contact" className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center">
  <div>
    <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
    <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out</h3>
  </div>
  <ul className="text-sm md:text-xl py-6 space-y-4">
    <li className="flex items-center space-x-2">
      <MdOutlineEmail color="#F7DF1E" size={20} />
      <a href="mailto:abhay888mishra@gmail.com" className="hover:underline">
        abhay888mishra@gmail.com
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <CiLinkedin color="#F7DF1E" size={20} />
      <a href="www.linkedin.com/in/abhay-mishra-488a17253" className="hover:underline">
        LinkedIn
      </a>
    </li>
    <li className="flex items-center space-x-2">
      <FaGithub color="#F7DF1E" size={20} />
      <a href="https://github.com/CodersKingdoms" className="hover:underline">
        Github
      </a>
    </li>
  </ul>
</div>

  )
}

export default Footer