import React, { useState, useTransition } from "react";
import TabButton from "./TabButton.jsx";
import AboutMeImg from "/AboutMe.png"; // Or use public path if needed

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">Languages:</span> C++, C, JavaScript (ES6+), Java
        </li>
        <li>
          <span className="font-semibold text-white">Frontend:</span> React.js, Tailwind CSS, HTML, CSS
        </li>
        <li>
          <span className="font-semibold text-white">Backend:</span> Node.js, Express.js, Spring Boot, REST APIs
        </li>
        <li>
          <span className="font-semibold text-white">Databases:</span> MongoDB, MySQL
        </li>
        <li>
          <span className="font-semibold text-white">DevOps & Tools:</span> Git, GitHub, Postman
        </li>
        <li>
          <span className="font-semibold text-white">Core Concepts:</span> DSA, OOP, DBMS, OS
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>
          <span className="font-semibold text-white">B.Tech in Computer Science</span> — SKITM, Indore <br />
          <span className="text-sm text-gray-400">2022 – 2026 | 6.5 cgpa</span>
        </li>
        <li>
          <span className="font-semibold text-white">Senior Secondary Education (Class XII)</span> — Bharat Higher Secondary School <br />
          <span className="text-sm text-gray-400">2021 – 2022 | 79.4%</span>
        </li>
        <li>
          <span className="font-semibold text-white">Secondary Education (Class X)</span> — Bharat Higher Secondary School <br />
          <span className="text-sm text-gray-400">2019 – 2020 | 77%</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc list-inside space-y-3 text-gray-300">
        <li>Data Structure and Alogorithm — Geeks-for-Geeks <span className="text-sm text-gray-400">2025</span></li>
        <li>C & C++ Programming — Infosys Springboard <span className="text-sm text-gray-400">2024</span></li>
      </ul>
    ),
  },
];

const AboutMeSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white min-h-screen">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <img src="/neer.jpeg" alt="About Me" className="rounded-2xl h-140 mb-27" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p>
            I am a Computer Science student at SKITM, Indore with strong
            DSA foundations and hands-on experience in full-stack web
            development. I enjoy building scalable, user-focused apps using
            modern technologies.
          </p>
          <br />
          <p>
            Solved 500+ problems on LeetCode, strengthening my problem-solving
            and efficient coding skills. Continuously seeking opportunities to
            contribute to real-world projects.
          </p>

          <div className="flex flex-row justify-start gap-5 mt-8">
            <TabButton  selectTab={() => handleTabChange("skills")} active={tab === "skills"}><span className="text-black">Skills</span></TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}><span className="text-black">Education</span></TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}><span className="text-black">Certifications</span></TabButton>
          </div>

          <div className="mt-8 min-h-80 transition-all duration-300">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
