// src/components/Hero.jsx
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/giet-campus-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/80 to-black/70"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="animate-fade-in-up">
            <div className="bg-black/50 backdrop-blur-md rounded-3xl p-6 md:p-12 border border-white/20 shadow-2xl">
              <h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-2xl"
                style={{
                  textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(255,255,255,0.3)",
                }}
              >
                Welcome to{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  GIET University
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-4 text-blue-100 font-light">
                Gandhi Institute of Engineering and Technology
              </p>
              <p className="text-base md:text-lg lg:text-xl mb-6 text-yellow-200 font-medium">
                Gunupur, Odisha - Shaping Future Leaders Since 1997
              </p>
              <p className="text-sm md:text-base mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
                Empowering students with world-class education, cutting-edge research, and industry-relevant skills to
                excel in the global marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admissions">
                  <button
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-base font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                  >
                    Apply Now
                  </button>
                </Link>
                <Link to="/about">
                  <button
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-base font-semibold rounded-full backdrop-blur-sm bg-white/20 transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Campus
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
