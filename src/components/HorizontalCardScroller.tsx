import { useRef, useState, useEffect } from 'react';
import Card from './Card';
import '../index.css';

type HorizontalCardScrollerProps = {
  title: string;
};

function HorizontalCardScroller({ title }: HorizontalCardScrollerProps) {
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Get current screen size
  const getScreenSize = () => {
    if (window.innerWidth >= 1024) return 'desktop'; // lg and up
    if (window.innerWidth >= 768) return 'tablet'; // md
    return 'mobile'; // sm and below
  };

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

  // Calculate scroll amount based on screen size
  const getScrollAmount = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return 0;

    const container = scrollContainerRef.current as HTMLElement;
    const screenSize = getScreenSize();
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Get card width (assuming all cards are same width)
    const firstCard = container.querySelector('.flex-none');
    if (!firstCard) return 0;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 16; // gap-4 = 1rem = 16px

    if (direction === 'left') {
      switch (screenSize) {
        case 'desktop':
          return 0; // Scroll to start
        case 'tablet':
          return Math.max(0, scrollLeft - (cardWidth + gap) * 2);
        case 'mobile':
          return Math.max(0, scrollLeft - (cardWidth + gap));
        default:
          return 0;
      }
    } else {
      // direction === 'right'
      const maxScroll = scrollWidth - clientWidth;

      switch (screenSize) {
        case 'desktop':
          return maxScroll; // Scroll to end
        case 'tablet':
          return Math.min(maxScroll, scrollLeft + (cardWidth + gap) * 2);
        case 'mobile':
          return Math.min(maxScroll, scrollLeft + (cardWidth + gap));
        default:
          return maxScroll;
      }
    }
  };

  // Scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount('left');
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount('right');
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
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
      <h2 className="text-2xl btn btn-accent font-bold mb-4 px-4 ml-4">
        {title}
      </h2>

      {/* Container with scroll arrows */}
      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute text-primary-content left-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow-md rounded-full p-2 ml-2 hover:bg-secondary transition-colors"
            aria-label="Scroll left"
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
            onClick={scrollRight}
            className="absolute text-primary-content right-0 top-1/2 -translate-y-1/2 z-10 bg-primary shadow-md rounded-full p-2 mr-2 hover:bg-secondary transition-colors"
            aria-label="Scroll right"
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
    </div>
  );
}

export default HorizontalCardScroller;
