import React from 'react';
import heroImage from '../assets/dome-bg.jpg'; // replace with your hero image

const Home = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Zaytuna College"
        className="w-full h-full object-cover brightness-[0.6]"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6">
          Become a Monthly Supporter of <br /> Zaytuna College Today
        </h1>

        {/* Decorative Icon */}
        <div className="text-5xl mb-6">༺༻</div>

        <button className="bg-red-700 hover:bg-red-800 px-6 py-3 text-white font-semibold rounded mt-4">
          Join 12000 Strong
        </button>
      </div>
    </div>
  );
};

export default Home;
