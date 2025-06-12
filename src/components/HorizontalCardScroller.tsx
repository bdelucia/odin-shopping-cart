import { useRef, useState, useEffect } from 'react';
import Card from './cards/Card';
import { HomeCardSkeleton } from './cards/CardSkeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type HorizontalCardScrollerProps = {
  title: string;
};

function HorizontalCardScroller({ title }: HorizontalCardScrollerProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const PRODUCTS_TO_FETCH = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${PRODUCTS_TO_FETCH}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl btn btn-accent font-bold mb-4 px-4 ml-4">
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
            {Array.from({ length: PRODUCTS_TO_FETCH }).map((_, index) => (
              <div key={index} className="flex-none">
                <HomeCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error: {error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl btn btn-accent font-bold mb-4 px-4 ml-4">
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
              <Card
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                imageAlt={product.title}
                price={product.price.toFixed(2)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HorizontalCardScroller;
