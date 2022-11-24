/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  const links=[
    {
      id:1,
      href:"https://www.linkedin.com/in/isamirlohiya/",
      child:( 
         <>
        LinkedIn <FaLinkedin size={30} />
        </>),
      style:"rounded-tr-md"
    },
    {
      id:2,
      href:"https://github.com/isamir909",
      child:( 
         <>
        GitHub <FaGithub size={30} />
        </>)
      
    },
    {
      id:3,
      href:"mailto:samirlohiya909@gmail.com",
      child:( 
         <>
        Mail <HiOutlineMail size={30} />
        </>)
      
    },
    {
      id:4,
      href:"Resume_Samir_Lohiya.pdf",
      child:( 
         <>
        Resume <BsFillPersonLinesFill size={30} />
        </>),
        style:"rounded-br-md",
        download:true
      
    },
  ]

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>

        {links.map(({id,href,child,style,download})=>(
           <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-green-700 ${style}`}>
              <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_SEJ" rel='noreferrer'>{child} </a>
            </li>
        ))}
      
      </ul>
    </div>
  );
};

export default SocialLinks;
