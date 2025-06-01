import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ import Footer here
import Home from './pages/Home';
import About from './pages/About';
import CampusLife from './pages/CampusLife';



// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
// import Give from './pages/Give';
// import Apply from './pages/Apply';

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
             
             
            {/* <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/give" element={<Give />} />
            <Route path="/apply" element={<Apply />} /> */}
          </Routes>
        </div>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
