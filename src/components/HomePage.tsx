import React from 'react';
import Header from './Header';
import ScrollArrow from './ScrollArrow';
import HorizontalCardScroller from './HorizontalCardScroller';
import Hero from './Hero';
import '../index.css';
import Footer from './Footer';

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

      <section className="h-[100vh] bg-secondary flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recommended For You
          </h2>
          <HorizontalCardScroller />
        </div>
      </section>

      <ScrollArrow />

      <Footer />
    </div>
  );
}

export default HomePage;
