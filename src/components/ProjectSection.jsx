import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "ClickCart",
    description: "Full stack e-comerce webstite",
    image: "/Clickstart.png",
    url: "https://github.com/Neeraj-eng/ClickCart-Backend",
  },
  {
    id: 2,
    title: "Blogify",
    description: "Full-stack blogging platform with auth and content management.",
    image: "/Blogify.png",
    // url: "https://github.com/AmbyHasan/BlogiFy.git",
  },
  {
    id: 3,
    title: "Currency-Convertor",
    description: "convert any country’s currency into another using live exchange rate APIs",
    image: "/Currency.png",
    url: "https://github.com/Neeraj-eng/React/tree/main/04currencyconvertor",
  },

  {
    id: 4,
    title: "React Task Management App",
    description: "Task management app with CRUD operations.",
    image: "/Todo.png",
    url: "https://github.com/Neeraj-eng/React/tree/main/09reduxTodo",
  },
];

const ProjectSection = () => {
  return (
    <div>
      <div className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
        My Projects
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            url={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
