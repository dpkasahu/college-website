import React from "react";
import { Link } from "react-router-dom";

export default function NewsEvents() {
  return (
    <>
      {/* Campus Showcase Video Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experience GIET Campus Life
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Take a virtual tour of our beautiful campus and see what makes GIET special
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ItJLjh2TT6A?si=z-RFHvyzbPg6EECs"
                  title="Discover GIET University: A Campus Where Nature Meets Innovation | 2024 Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                Discover GIET University: A Campus Where Nature Meets Innovation
              </h3>
              <p className="text-blue-200">
                Step into the heart of GIET University and experience the charm of our picturesque campus! From lush
                green gardens to state-of-the-art facilities, every corner is designed to inspire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50"></div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text mb-4">
              Latest News & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings and upcoming events at GIET University
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* News Card */}
            <div className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4">
                <h3 className="text-2xl flex items-center">
                  <span className="mr-3">📰</span>Recent News
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6 hover:bg-blue-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-blue-700 text-lg mb-2">GIET Students Win National Hackathon</h4>
                    <p className="text-gray-700 mb-2">
                      Team "Code Warriors" secured first place in National Tech Hackathon 2024.
                    </p>
                    <p className="text-gray-500 text-sm">January 15, 2024</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 hover:bg-green-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-green-700 text-lg mb-2">New Research Center Inaugurated</h4>
                    <p className="text-gray-700 mb-2">
                      AI & Machine Learning Research Center inaugurated by Hon'ble Chief Minister.
                    </p>
                    <p className="text-gray-500 text-sm">January 10, 2024</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 hover:bg-purple-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-purple-700 text-lg mb-2">International Collaboration</h4>
                    <p className="text-gray-700 mb-2">MOU signed with University of Technology, Australia.</p>
                    <p className="text-gray-500 text-sm">January 8, 2024</p>
                  </div>
                </div>
                <Link to="/happenings">
                  <div className="mt-6 inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 cursor-pointer text-center">
                    View All News
                  </div>
                </Link>
              </div>
            </div>

            {/* Events Card */}
            <div className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4">
                <h3 className="text-2xl flex items-center">
                  <span className="mr-3">🎉</span>Upcoming Events
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-600 pl-6 hover:bg-orange-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-orange-700 text-lg mb-2">TECHNOVATION 2024</h4>
                    <p className="text-gray-700 mb-2">
                      Annual technical festival with competitions and workshops.
                    </p>
                    <p className="text-gray-500 text-sm">February 15-17, 2024</p>
                  </div>
                  <div className="border-l-4 border-pink-600 pl-6 hover:bg-pink-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-pink-700 text-lg mb-2">KALEIDOSCOPE 2024</h4>
                    <p className="text-gray-700 mb-2">
                      Cultural extravaganza with music, dance, and art.
                    </p>
                    <p className="text-gray-500 text-sm">March 5-7, 2024</p>
                  </div>
                  <div className="border-l-4 border-teal-600 pl-6 hover:bg-teal-50 p-4 rounded-r-lg transition-colors duration-300">
                    <h4 className="font-bold text-teal-700 text-lg mb-2">Industry Connect Summit</h4>
                    <p className="text-gray-700 mb-2">
                      Annual summit with industry leaders and students.
                    </p>
                    <p className="text-gray-500 text-sm">March 20, 2024</p>
                  </div>
                </div>
                <Link to="/happenings">
                  <div className="mt-6 inline-block bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300 cursor-pointer text-center">
                    View All Events
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
