import React, { useState } from "react";
import {
  Code,
  Palette,
  Code2,
  Atom,
  GitBranch,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import logo from "./assets/tanvie_hossen.jpg";
import { Typewriter } from 'react-simple-typewriter';

export default function Portfolio() {
  const skills = [
    { name: "HTML5", icon: <Code className="w-5 h-5" /> },
    { name: "CSS3 / Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
    { name: "JavaScript (ES6)", icon: <Code2 className="w-5 h-5" /> },
    { name: "React.js", icon: <Atom className="w-5 h-5" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-5 h-5" /> },
    { name: "Responsive Design", icon: <Smartphone className="w-5 h-5" /> },
  ];

  const allProjects = [
    {
      title: "eCommerce Frontend UI",
      desc: "Shop UI with product listing, detail, and cart system (React, Tailwind).",
    },
    {
      title: "Landing Page Design",
      desc: "Clean and responsive landing page using HTML, Tailwind, and React.",
    },
    {
      title: "Smart Clock App",
      desc: "Digital clock with alarm and day-night theme (HTML, CSS, JS)",
    },
    {
      title: "Chat App UI",
      desc: "Frontend chat interface built using HTML, CSS, JavaScript.",
    },
    {
      title: "To-do List App",
      desc: "Responsive task manager with JavaScript DOM.",
    },
    {
      title: "Figma to React Project",
      desc: "Converted Figma design into fully responsive React frontend.",
    },
    {
      title: "Responsive Website",
      desc: "Built multi-page responsive website using Tailwind & React.",
    },
  ];

  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans">
      {/* Header */}
      <header className="bg-gray-800 text-white py-5 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-start gap-8">
          <img
            src={logo}
            alt="MD HOSSEN"
            className="w-40 h-40 rounded shadow-md object-cover"
          />

          <div className="text-center md:text-left">
            <h1 className="text-5xl font-samibold tracking-wide">TANVIR HOSSAIN</h1>
            <p className="text-xl mt-3 text-sky-500 font-semibold">
              <Typewriter
                words={[
                  'Frontend Developer',
                  'React.js Enthusiast',
                  'JavaScript Lover',
                  'Responsive Website Design',
                  'Landing Page Design',
                  'eCommerce Frontend (Shop UI)',
                  'Email Template Design',
                  'React Components Design'
                ]}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-purple-400">About Me</h2>
        <p className="text-lg leading-8 text-gray-300">
          I'm a passionate frontend developer with 1+ years of experience in crafting responsive and user-friendly web interfaces.
          I love turning ideas into digital experiences using modern tools like React.js, Tailwind CSS, and JavaScript.
          My background includes both freelance and personal projects, focused on clean design and accessible code.
          I'm eager to work in fast-paced environments where creativity and logic merge.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-4 py-14 bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-4xl font-semibold mb-8 text-purple-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-3 bg-purple-700 hover:bg-purple-600 text-white font-medium py-4 px-6 rounded-lg transition duration-300 shadow-md"
            >
              {skill.icon}
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-semibold mb-8 text-purple-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visibleProjects.map((proj, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 hover:bg-gray-700 border border-purple-700 rounded-xl transition duration-300 shadow-lg"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-3">{proj.title}</h3>
              <p className="text-gray-300 text-base">{proj.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="text-purple-400 hover:text-purple-200 flex items-center justify-center mx-auto gap-2"
          >
            {showAllProjects ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            {showAllProjects ? "Show Less" : "Show More Projects"}
          </button>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-4 py-16 bg-gray-800 rounded-xl shadow-md">
        <h2 className="text-4xl font-semibold mb-8 text-purple-400">Contact</h2>
        <div className="space-y-6 text-gray-300 max-w-md mx-auto">
          <p className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-purple-400" />
            +8801792009980
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-purple-400" />
            Bangladesh
          </p>
          <p className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:mdtanvirhossen666@gmail.com"
              className="hover:underline hover:text-blue-300"
            >
              mdtanvirhossen666@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3">
            <Linkedin className="w-6 h-6 text-blue-400" />
            <a
              href="https://www.linkedin.com/in/md-hossen-43738a373"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              linkedin.com/in/md-hossen-43738a373
            </a>
          </p>
          <p className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-blue-600"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.07v-2.89h2.37V9.8c0-2.35 1.4-3.65 3.54-3.65 1.03 0 2.1.18 2.1.18v2.31h-1.18c-1.17 0-1.53.73-1.53 1.48v1.78h2.6l-.42 2.89h-2.18v6.99C18.34 21.12 22 16.99 22 12z" />
            </svg>
            <a
              href="https://www.facebook.com/share/1AmoLkeRAQ/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-400"
            >
              facebook.com/mdhossen
            </a>
          </p>
        </div>
      </section>

      <footer className="text-center text-sm py-8 text-gray-500 mt-16">
        © {new Date().getFullYear()} <span className="font-semibold text-purple-400">MD HOSSEN</span>. All rights reserved.
      </footer>
    </div>
  );
}
