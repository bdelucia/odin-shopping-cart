import React from 'react';
import Header from './Header';
import ScrollArrow from './ScrollArrow';
import HorizontalCardScroller from './HorizontalCardScroller';
import Hero from './Hero';
import '../index.css';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <Hero />

      <section className="h-[100vh] bg-base-200 flex flex-col justify-center py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <HorizontalCardScroller />
        </div>
      </section>

      <section className="h-[100vh] bg-base-100 flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">About The Bob Shop</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We've been providing quality products and exceptional service for
            over a decade. Our commitment to excellence ensures you get the best
            value for your money.
          </p>
        </div>
      </section>

      <section className="h-[100vh] bg-neutral text-neutral-content flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg mb-8">
            Have questions? We'd love to hear from you!
          </p>
          <button className="btn btn-primary btn-lg">Contact Us</button>
        </div>
      </section>

      <ScrollArrow />
    </div>
  );
}

export default HomePage;
