// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
      <div
        className="absolute top-32 right-20 w-16 h-16 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <div className="text-xl font-bold">GIET University</div>
                <div className="text-sm text-blue-200">Gunupur, Odisha</div>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              Empowering students with world-class education and industry-relevant skills to excel in the global
              marketplace.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">🐦</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">💼</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About GIETU", to: "/about" },
                { name: "Academics", to: "/academics" },
                { name: "Programmes", to: "/programmes" },
                { name: "Admissions", to: "/admissions" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Student Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Examinations", to: "/examinations" },
                { name: "Placements", to: "/placements" },
                { name: "Alumni", to: "/alumni" },
                { name: "Campus Life", to: "/happenings" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="text-blue-200 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 text-blue-200 text-sm">
              <div className="flex items-start space-x-2">
                <span className="text-white">📍</span>
                <div>
                  <p>GIET University</p>
                  <p>Gunupur, Rayagada District</p>
                  <p>Odisha - 765022, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white">📞</span>
                <p>+91-6815-222222</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white">✉️</span>
                <p>info@giet.edu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">&copy; 2024 GIET University. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-blue-200 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
