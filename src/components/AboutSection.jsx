import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AboutSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section ref={sectionRef} className=" bg-black text-white px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <h1
          className={`text-6xl font-light mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          About me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
            >
              <h2 className="text-2xl font-medium mb-6">
                AS A FULL STACK DEVELOPER
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Full Stack Developer & Co-founder at Ofzen with experience
                delivering real-world web and mobile projects. Skilled in
                building responsive, scalable applications using React.js, React
                Native, Node.js, Express.js, and MongoDB. Strong background in
                API integration, database management, and deployment with AWS
                and Docker. Passionate about creating seamless user experiences
                across web and mobile platforms, and currently exploring how to
                bring AI-powered solutions into applications.
              </p>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? "0.6s" : "0s" }}
            >
              <h2 className="text-2xl font-medium mb-6">OTHER INTERESTS</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I like to play cricket, watch movies and
                travel with friends to new places. I enjoy exploring different
                destinations and creating memories with good company.
              </p>
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "0.8s" : "0s" }}
          >
            <div className="w-96 h-full bg-transparent rounded-3xl overflow-hidden">
              <img
                src="/me2.png"
                alt="Profile"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
