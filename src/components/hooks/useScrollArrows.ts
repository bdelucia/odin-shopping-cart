import { useRef, useState, useEffect, type RefObject } from 'react';

interface UseScrollArrowsOptions {
  gap?: number; // Gap between cards in pixels
  cardSelector?: string; // CSS selector for cards
  scrollBehavior?: ScrollBehavior; // 'smooth' or 'auto'
}

interface UseScrollArrowsReturn {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  showLeftArrow: boolean;
  showRightArrow: boolean;
  scrollLeft: () => void;
  scrollRight: () => void;
}

export default function useScrollArrows({
  gap = 16,
  cardSelector = '.flex-none',
  scrollBehavior = 'smooth',
}: UseScrollArrowsOptions = {}): UseScrollArrowsReturn {
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

    const container = scrollContainerRef.current;
    const screenSize = getScreenSize();
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // Get card width (assuming all cards are same width)
    const firstCard = container.querySelector(cardSelector);
    if (!firstCard) return 0;

    const cardWidth = firstCard.getBoundingClientRect().width;

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
        behavior: scrollBehavior,
      });
    }
  };

  // Scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount('right');
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: scrollBehavior,
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

  return {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  };
}
