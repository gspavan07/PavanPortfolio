import { HiOutlineMail, HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 lg:px-10">
      <div className="text-center max-w-5xl">
        <div
          className="mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="w-32 h-32 mx-auto mb-14 ">
            <img
              src="/me.png"
              alt="Pavan"
              className="w-full h-full rounded-2xl object-cover transition-all duration-500"
              style={{ boxShadow: "none" }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow =
                  "-10px -10px 30px rgba(147, 51, 234, 0.3), 0 0 25px rgba(6, 182, 212, 0.5), 10px 10px 30px rgba(59, 130, 246, 0.3)")
              }
              onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span
            className="block opacity-0 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            Hey, I'm Pavan
          </span>
          <span
            className="block opacity-0 animate-slide-up"
            style={{ animationDelay: "0.8s" }}
          >
            Full Stack Web & Mobile Developer
          </span>
        </h1>

        <p
          className="text-sm md:text-xl text-gray-400 mb-12 opacity-0 animate-slide-up"
          style={{ animationDelay: "1s" }}
        >
          Building scalable applications and seamless user experiences at Ofzen.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 items-center justify-center opacity-0 animate-slide-up"
          style={{ animationDelay: "1.2s" }}
        >
          <Link
            to="mailto:dev.pavangollapalli@gmail.com"
            className="max-w-60 justify-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-all duration-500 flex items-center gap-2"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow =
                "-15px -15px 40px rgba(147, 51, 234, 0.3), 0 0 35px rgba(6, 182, 212, 0.5), 15px 15px 40px rgba(59, 130, 246, 0.3)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Let's connect{" "}
            <HiOutlineMail className="w-5 h-5 bg-white text-black" />
          </Link>
          <button
            onClick={() => {
              const element = document.getElementById("work");
              if (element) {
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset - 40;
                window.scrollTo({
                  top: elementPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="max-w-60 border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-2"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow =
                "-15px -15px 40px rgba(147, 51, 234, 0.3), 0 0 35px rgba(6, 182, 212, 0.5), 15px 15px 40px rgba(59, 130, 246, 0.3)")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Explore my work <HiOutlineBriefcase className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        className="absolute bottom-8 w-full left-1/2 flex justify-center items-center transform -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="w-3/5 border border-white/50 rounded-lg bg-gray-600"></div>
      </div>
    </div>
  );
};

export default HeroSection;
