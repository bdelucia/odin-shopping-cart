import React from 'react';
function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold italic text-primary ">
            Hello there!
          </h1>
          <p className="mb-5 text-white">
            Welcome to the <span className="italic">Bob Shop.</span> Bobbeh has
            wares if you have coin.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
