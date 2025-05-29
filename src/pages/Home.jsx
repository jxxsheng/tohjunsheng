import { Download, Github, Linkedin, Mail } from "lucide-react";
import ProfileImage from "../assets/ProfileImage.jpg";

export const Home = () => {
  return (
    <div >
      <section id="home" className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Profile image */}
          <div className="mb-8">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover"
            />
          </div>

          {/* Hero Section */}
          <h1 className="text-3xl sm:text-5xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600">
              Jun Sheng
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
            2nd year undergraduate at Nanyang Technological University, majoring in Data Science and Artificial Intelligence. Always open to learning, exploring, and collaborating — let's connect on LinkedIn!
          </p>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/Resume_TohJunSheng.pdf"
              download="Resume_TohJunSheng.pdf"
              className="flex items-center px-6 py-3 text-lg font-medium text-white rounded-md bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-900 hover:to-blue-600 transition"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>

            <div className="flex gap-4">
              <a
                href="https://github.com/jxxsheng"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tohjunsheng/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:itsjunsheng@gmail.com"
                className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};