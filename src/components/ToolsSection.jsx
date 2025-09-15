import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const ToolsSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const frameworks = [
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express",
    "FastAPI",
    "JavaScript",
    "Python",
  ];

  const tools = [
    "Docker",
    "Kubernetes",
    "AWS",
    "Firebase",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Elasticsearch",
  ];

  const devOps = [
    "Git",
    "CI/CD",
    "Fastlane",
    "Azure DevOps",
    "Xcode",
    "Android Studio",
    "VS Code",
    "Figma",
  ];

  const ToolButton = ({ children }) => (
    <button className="px-4 py-2 rounded-lg border border-gray-600 text-white transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-white/50 hover:border-white hover:bg-white hover:text-black hover:scale-105">
      {children}
    </button>
  );

  return (
    <section ref={sectionRef} className=" bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl font-medium text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          Technologies & Skills
        </h2>
        <div
          className={`w-20 h-1 bg-gradient-to-r from-gray-400 to-white mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.3s" : "0s" }}
        ></div>

        {/* Frameworks & Libraries */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <h3 className="text-xl text-gray-300 mb-6 flex items-center">
            <span className="mr-2">🚀</span>
            Frameworks & Languages
            <span className="ml-2">🚀</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            {frameworks.map((framework) => (
              <ToolButton key={framework}>{framework}</ToolButton>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
        >
          <h3 className="text-xl text-gray-300 mb-6 flex items-center">
            <span className="mr-2">🛠</span>
            Tools & Technologies
            <span className="ml-2">🔧</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool) => (
              <ToolButton key={tool}>{tool}</ToolButton>
            ))}
          </div>
        </div>

        {/* Development & DevOps */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
        >
          <h3 className="text-xl text-gray-300 mb-6 flex items-center">
            <span className="mr-2">📋</span>
            Development & DevOps
            <span className="ml-2">🔧</span>
          </h3>
          <div className="flex flex-wrap gap-4">
            {devOps.map((item) => (
              <ToolButton key={item}>{item}</ToolButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
