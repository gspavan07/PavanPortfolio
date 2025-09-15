import { HiMail } from "react-icons/hi";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [footerRef, isVisible] = useIntersectionObserver();

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-12 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.2s" : "0s" }}
        >
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Pavan Gollapalli
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6 max-w-md mx-auto">
            Full Stack Developer passionate about creating innovative solutions
            and seamless user experiences.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="mailto:dev.pavangollapalli@example.com"
              className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors"
            >
              <HiMail className="w-5 h-5" />
            </Link>
            <Link
              to="https://github.com/gspavan07"
              target="_blank"
              className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/shanmukpavan-gollapalli"
              target="_blank"
              className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-slate-600/50 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-gray-800 pt-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "0.4s" : "0s" }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Pavan Gollapalli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
