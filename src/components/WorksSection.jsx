import { Link } from "react-router-dom";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import {
  FaCode,
  FaBrain,
  FaBuilding,
  FaClipboardList,
  FaExternalLinkAlt,
} from "react-icons/fa";

const WorksSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      icon: FaCode,
      title: "CodeTracker",
      description:
        "Comprehensive platform aggregating coding statistics from LeetCode, CodeChef, GeeksforGeeks, and HackerRank into a unified dashboard. Features multi-role access, automated web scraping, and real-time ranking system for university placement tracking.",
      tags: ["React", "Node.js", "MySQL", "React Native"],
      link: "https://github.com/gspavan07/code_to_win",
    },
    {
      id: 2,
      icon: FaBrain,
      title: "AI Document Query Engine",
      description:
        "Advanced FastAPI system processing multi-format documents (PDF, DOCX, Images) with OCR capabilities. Features FAISS vector search, Azure OpenAI GPT-5 integration, LangGraph agents, and real-time WebSocket monitoring dashboard.",
      tags: ["FastAPI", "LangGraph", "FAISS", "OpenAI"],
      link: "https://github.com/gspavan07/llm_system",
    },
    {
      id: 3,
      icon: FaBuilding,
      title: "Ofzen - Company Website",
      description:
        "Modern corporate website for Ofzen, a technology company specializing in web and mobile development. Features responsive design, interactive animations, and optimized performance for showcasing company services and portfolio.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "https://ofzen.in",
    },
    {
      id: 4,
      icon: FaClipboardList,
      title: "Examate - Exam Cell Automation",
      description:
        "Comprehensive exam cell automation system streamlining examination processes from scheduling to invigilation. Features automated room allocation, student seating arrangements, invigilator assignments, and real-time monitoring with Excel/CSV support.",
      tags: ["Node.js", "React Native", "MySQL", "Expo"],
      link: "https://github.com/gspavan07/examate",
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-medium mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
          >
            My Works
          </h2>
          <div
            className={`w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
          ></div>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-black rounded-2xl p-6 transition-all duration-300 border border-gray-500 hover:border-transparent w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] overflow-hidden"
            >
              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[2px]">
                <div
                  className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-950/20 via-blue-950/20 to-purple-950/20"
                  style={{ backgroundColor: "rgba(0,0,0,0.90)" }}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                    <project.icon className="text-lg" />
                  </div>
                  <Link
                    to={project.link}
                    target="_blank"
                    className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </Link>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-slate-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
