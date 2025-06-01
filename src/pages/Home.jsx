import React from 'react';
import Hero from '../components/hero';             // ✅ Assuming it exists
import NewsEvents from '../components/NewsEvents';
import QuickLinks from '../components/QuickLinks';
function Home() {
  return (
    <>
      
      <Hero />
      <NewsEvents />
      <QuickLinks />
      {/* Add more components like Highlights, Features, etc. */}
    </>
  );
}

export default Home;
