import React from "react";
import { TypeAnimation } from "react-type-animation";
import NavLink from "./NavLink";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="mb-4 text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:text-5xl">
          <span className="text-white">Hello, I&apos;m </span>
          <br />
          <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            <TypeAnimation
              sequence={["Neeraj Nagar |", 1000, "Full Stack Developer |", 1000, "Problem Solver |", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-[#ADB7BE] text-base lg:text-lg leading-relaxed max-w-xl mb-6">
          Full-Stack Developer and competitive programmer with strong DSA fundamentals,
          experienced in building scalable web applications and AI-powered products using modern tech stacks.
        </p>
        <div>
          <a href="#contact">
          <button 
          className="px-10 py-4 w-full rounded-full mr-4 mb-2 hover:bg-slate-300 text-white sm:w-fit bg-linear-to-br from-blue-500 via-purple-500 to-pink-500">
            Hire Me
          </button>
          </a>
          
          <a href="/Neeraj_Nagar_Resume.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="px-1 py-1 sm:w-fit w-full rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 hover:scale-102 transition">
              <span className="block hover:bg-slate-800 rounded-full px-2 text-white">
                Download Resume
              </span>
            </button>
          </a>
        </div>
      </div>

      <div className="col-span-5 flex justify-center items-center place-self-center mt-6 lg:mt-4">
        <div className="relative w-62.5 h-62.5 lg:w-75 lg:h-110 rounded-3xl overflow-hidden border-5 border-white hidden md:block">
          <img
            src="/formal_neeraj.jpeg"
            alt="Neeraj Nagar"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
