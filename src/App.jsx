import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import Academics from './pages/Academics';
// import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
// import Give from './pages/Give';
// import Apply from './pages/Apply';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/campus-life" element={<CampusLife />} />
        {/* <Route path="/academics" element={<Academics />} /> */}
        <Route path="/admissions" element={<Admissions />} />
        
        {/* <Route path="/give" element={<Give />} />
        <Route path="/apply" element={<Apply />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
