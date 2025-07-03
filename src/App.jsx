import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import CampusLife from "./pages/CampusLife";
import Admissions from "./pages/Admissions";
import StudentAchievementsPage from "./pages/StudentAchievementsPage";
import AccreditationPage from "./pages/AccreditationPage";
import EmploymentPage from "./pages/EmploymentPage";
import Apply from './pages/Apply.jsx'
// import Academics from './pages/Academics';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/admissions" element={<Admissions />}/>
              <Route path="/admissions/register" element={<Apply />} />
            <Route path="/achievements" element={<StudentAchievementsPage />} />
            <Route path="/accreditation" element={<AccreditationPage />} />
            <Route path="/employment" element={<EmploymentPage />} />
            {/* <Route path="/academics" element={<Academics />} /> */}
            {/* <Route path="/give" element={<Give />} /> */}
            {/* <Route path="/apply" element={<Apply />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
