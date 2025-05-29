//client/src/components/HeroBanner.tsx


import React from 'react';
import { Link } from "react-router-dom";

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-between rounded-lg mx-4 md:mx-12 my-8">
      {/* Left Text */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Discover your <span className="text-yellow-300">perfect</span> style with Eclypse
        </h1>
        <p className="mb-6 text-lg md:text-xl max-w-md">
          Shop the latest and greatest products crafted just for you.
        </p>
        <button className="bg-yellow-300 text-purple-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
          <Link to="/shop">Shop Now</Link>
        </button>
      </div>

      {/* Right Image (placeholder) */}
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
          alt="Fashion banner"
          className="rounded-lg shadow-lg max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
