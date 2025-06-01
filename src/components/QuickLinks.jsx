import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { GraduationCap, Users, Award, Building } from "lucide-react";

export default function QuickLinks() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 bg-clip-text mb-4">
            Why Choose GIET University?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover excellence in education with our world-class facilities and innovative approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/academics">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
              <CardHeader className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-blue-800 group-hover:text-blue-900">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  Industry-relevant curriculum with hands-on learning and research opportunities.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/placements">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
              <CardHeader className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Award className="w-16 h-16 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-blue-800 group-hover:text-green-700">95% Placements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  Excellent placement record with top companies and competitive packages.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/alumni">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
              <CardHeader className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Users className="w-16 h-16 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-blue-800 group-hover:text-purple-700">
                  Strong Alumni Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  15,000+ alumni worldwide in leading positions across industries.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/about">
            <Card className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transform">
              <CardHeader className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Building className="w-16 h-16 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl text-blue-800 group-hover:text-orange-700">
                  Modern Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  State-of-the-art facilities, laboratories, and campus amenities.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
