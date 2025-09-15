import { AiOutlineHome } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineBriefcase, HiOutlineDocumentText } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      icon: AiOutlineHome,
      href: "#",
      isScroll: true,
      scrollTarget: "top",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      href: "https://github.com/gspavan07",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/shanmukpavan-gollapalli",
    },
    {
      name: "My Work",
      icon: HiOutlineBriefcase,
      href: "#work",
      isScroll: true,
    },
    {
      name: "Resume",
      icon: HiOutlineDocumentText,
      href: "/PavanGollapalli_Resume.pdf",
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className="hidden md:block fixed top-14 left-1/2 transform -translate-x-1/2 z-40"
        style={{ boxShadow: "none" }}
        onMouseEnter={(e) =>
          (e.target.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.2)")
        }
        onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
      >
        <div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3 transition-all duration-700 ease-out"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
        >
          <div className="flex items-center space-x-12">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <>
                  {item.isScroll ? (
                    <button
                      key={item.name}
                      onClick={() => {
                        if (item.scrollTarget === "top") {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        } else {
                          const element = document.getElementById("work");
                          if (element) {
                            const elementPosition =
                              element.getBoundingClientRect().top +
                              window.pageYOffset -
                              40;
                            window.scrollTo({
                              top: elementPosition,
                              behavior: "smooth",
                            });
                          }
                        }
                      }}
                      className="flex flex-col items-center text-gray-300 hover:text-white transition-colors cursor-pointer opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <IconComponent className="text-lg mb-1" />
                      <span className="text-xs">{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      target="_blank"
                      key={item.name}
                      className="flex flex-col items-center text-gray-300 hover:text-white transition-colors cursor-pointer opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    >
                      <IconComponent className="text-lg mb-1" />
                      <span className="text-xs">{item.name}</span>
                    </Link>
                  )}

                  {index === 0 && (
                    <div
                      className="h-8 w-px bg-gray-600 mx-2 transition-colors cursor-pointer opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    />
                  )}
                  {index === 2 && (
                    <div
                      className="h-8 w-px bg-gray-600 mx-2 transition-colors cursor-pointer opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                    />
                  )}
                </>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white p-3 rounded-xl transition-all duration-300 hover:bg-gray-800"
        >
          {isOpen ? (
            <HiX className="text-xl" />
          ) : (
            <HiMenu className="text-xl" />
          )}
        </button>

        {isOpen && (
          <div className="absolute top-16 right-0 bg-black rounded-xl p-4 min-w-[200px] transform transition-all duration-300 ease-out animate-fade-in">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return item.isScroll ? (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsOpen(false);
                    if (item.scrollTarget === "top") {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    } else {
                      const element = document.getElementById("work");
                      if (element) {
                        const elementPosition =
                          element.getBoundingClientRect().top +
                          window.pageYOffset -
                          10;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: "smooth",
                        });
                      }
                    }
                  }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-3 px-2 rounded-lg hover:bg-gray-800 opacity-0 animate-fade-in w-full text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="text-lg" />
                  <span className="text-sm">{item.name}</span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 py-3 px-2 rounded-lg hover:bg-gray-800 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent className="text-lg" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
