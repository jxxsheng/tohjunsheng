import { ExternalLink, Github } from "lucide-react";
import EverlyImage from "../assets/Everly_Image.jpg";
import OnlyFoodsImage from "../assets/OnlyFoods_Image.jpg";
import OwadioImage from "../assets/Owadio_Image.jpg";

export const Projects = () => {
  const projects = [
    {
        title: "Owadio",
        description:
        "This is a web application dedicated for Full-time National Servicemen (NSFs) and Pre-Enlistees to count the number of days to ORD and Enlistment.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/jxxsheng/owadio", 
        live: "https://owadio.com",
        image: OwadioImage,
    },
    {
      title: "AI Companion Chatbot",
      description:
      "Everly is an AI-powered companion chatbot designed to provide emotional support and daily interaction for elderly individuals living alone. Feel free to give it a try!",
      tech: ["React", "JavaScript", "CSS", "SonarPro API", "Vercel"],
      github: "https://github.com/jxxsheng/Companion-Chatbot",
      live: "https://cc7-t053-a1.vercel.app/",
      image: EverlyImage,
    },
    {
      title: "Food Social Media",
      description:
      "Developed as part of SC2006 Software Engineering project, this platform enables food enthusiasts to share recipes, explore new dishes, and track nutritional intake",
      tech: ["Node.js", "Express", "JavaScript", "CSS", "SupaBase"],
      github: "https://github.com/jxxsheng/OnlyFoods",
      live: "https://youtu.be/TNKK4Agpqcc",
      image: OnlyFoodsImage,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-md text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
