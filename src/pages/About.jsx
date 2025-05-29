import { Briefcase, ChevronLeft, ChevronRight, Download, Users } from "lucide-react";
import { useState } from "react";
import AISG1 from "../assets/AISG_Image1.jpg";
import IGC1 from "../assets/IGC_Image1.jpg";
import IGC2 from "../assets/IGC_Image2.jpg";
import IGC3 from "../assets/IGC_Image3.jpg";

export const About = () => {

  const internshipImages = [AISG1];
  const ccaImages = [IGC1, IGC2, IGC3];
  const [internshipIndex, setInternshipIndex] = useState(0);
  const [ccaIndex, setCcaIndex] = useState(0);

  const nextInternshipImage = () =>
    setInternshipIndex((prev) => (prev + 1) % internshipImages.length);
  const prevInternshipImage = () =>
    setInternshipIndex((prev) => (prev - 1 + internshipImages.length) % internshipImages.length);

  const nextCcaImage = () =>
    setCcaIndex((prev) => (prev + 1) % ccaImages.length);
  const prevCcaImage = () =>
    setCcaIndex((prev) => (prev - 1 + ccaImages.length) % ccaImages.length);

  return (
    <section id="about" className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-slate-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* CCA Section */}
          <div className="text-center">
            <h3 className="flex justify-center items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-3">
              <Users className="h-5 w-5" />
              Co-Curricular Activities
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              As Chairperson of NTU Welfare Services Club Ignite Change in AY24/25, I led the planning and execution
              of one of NTU's Big 4 Freshmen Orientation Programmes. Alongside this, I actively volunteer with the club
              to support a diverse range of beneficiaries, including underprivileged children and elderly individuals.
            </p>
            <div className="relative flex justify-center items-center mb-6">
              <button
                onClick={prevCcaImage}
                className="absolute left-2 bg-white dark:bg-slate-700 p-1 rounded-full shadow transition-transform duration-200 hover:scale-110 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <img
                src={ccaImages[ccaIndex]}
                alt="CCA Activity"
                className="w-full md:w-[90%] h-64 object-cover rounded-lg shadow-md"
              />
              <button
                onClick={nextCcaImage}
                className="absolute right-2 bg-white dark:bg-slate-700 p-1 rounded-full shadow transition-transform duration-200 hover:scale-110 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          {/* Internship Section */}
          <div className="text-center">
            <h3 className="flex justify-center items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white mb-3">
              <Briefcase className="h-5 w-5" />
              Internship Experience
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              I interned at AI Singapore as an AI Engineer from May to August 2025, where I worked with a team of six to enhance
              the factuality and accuracy of a Large Language Model. Truly a remarkable experience working alongside AI
              professionals and gaining exposure to the full software development lifecycle.
            </p>
            <div className="relative flex justify-center items-center mb-6">
              <button onClick={prevInternshipImage} className="absolute left-2 bg-white dark:bg-slate-700 p-1 rounded-full shadow">

              </button>
              <img
                src={internshipImages[internshipIndex]}
                alt="Internship at AI Singapore"
                className="w-full md:w-[90%] h-64 object-cover rounded-lg shadow-md"
              />
              <button onClick={nextInternshipImage} className="absolute right-2 bg-white dark:bg-slate-700 p-1 rounded-full shadow">

              </button>
            </div>
            <div className="flex justify-center">
              <a
                href="/AISG_Testimonial.pdf"
                download="AISG_Testimonial_TohJunSheng.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
              >
                <Download className="h-5 w-5" />
                Download Testimonial
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};
