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
      <div className="hero-content text-neutral-content text-left">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-bold italic text-tertiary ">
            Hello there
          </h1>
          <p className="mb-5 text-white">
            Welcome to the Bob Shop. Please browse my wares Lorem, ipsum dolor
            sit amet consectetur adipisicing elit. Dolorum illum, dignissimos
            perferendis nam neque tempore accusantium officia tempora sit
            doloribus magni quae ducimus nobis beatae. Repellat ducimus ipsam
            dolorem. Repudiandae.
          </p>
          <button className="btn btn-primary btn-soft">Get Started</button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Hero;
