import React, { useRef, useState, useEffect } from 'react';
import Card from './Card';
import '../index.css';

function HorizontalCardScroller() {
  // Sample data with 10 products
  const products = [
    { id: 1, title: 'Product 1', description: 'Description for product 1' },
    { id: 2, title: 'Product 2', description: 'Description for product 2' },
    { id: 3, title: 'Product 3', description: 'Description for product 3' },
    { id: 4, title: 'Product 4', description: 'Description for product 4' },
    { id: 5, title: 'Product 5', description: 'Description for product 5' },
    { id: 6, title: 'Product 6', description: 'Description for product 6' },
    { id: 7, title: 'Product 7', description: 'Description for product 7' },
    { id: 8, title: 'Product 8', description: 'Description for product 8' },
    { id: 9, title: 'Product 9', description: 'Description for product 9' },
    { id: 10, title: 'Product 10', description: 'Description for product 10' },
  ];

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;

      // Show left arrow if not at the beginning
      setShowLeftArrow(scrollLeft > 0);

      // Show right arrow if not at the end
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  // Scroll to beginning
  const scrollToStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Scroll to end
  const scrollToEnd = () => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      scrollContainerRef.current.scrollTo({
        left: maxScroll,
        behavior: 'smooth',
      });
    }
  };

  // Check scroll position on mount and when scrolling
  useEffect(() => {
    checkScrollPosition();

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);

      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 px-4">Featured Products</h2>

      {/* Container with scroll arrows */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollToStart}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow-md rounded-full p-2 ml-2 hover:bg-secondary transition-colors"
            aria-label="Scroll to start"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollToEnd}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow-md rounded-full p-2 mr-2 hover:bg-secondary transition-colors"
            aria-label="Scroll to end"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Horizontal scrolling container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar scroll-smooth"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-none">
              <Card title={product.title} description={product.description} />
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar styling */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}

export default HorizontalCardScroller;
