import { useState, useEffect } from 'react';
import '../index.css';

function ScrollArrow() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isDownVisible, setIsDownVisible] = useState(true);
  const [isUpVisible, setIsUpVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  // Calculate total sections based on page height
  const getTotalSections = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    return Math.ceil(totalHeight / viewportHeight);
  };

  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    //const totalSections = getTotalSections();
    const totalSections = 4;
    const nextSection = currentSection + 1;

    // If going to last section and it's shorter than viewport, scroll to bottom
    if (nextSection === totalSections - 1) {
      window.scrollTo({
        top: totalHeight - viewportHeight,
        behavior: 'smooth',
      });
    } else {
      const scrollTo = nextSection * viewportHeight;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    }

    setCurrentSection(nextSection);
    setHasScrolledDown(true);
  };

  const scrollToPreviousSection = () => {
    const viewportHeight = window.innerHeight;
    const previousSection = Math.max(0, currentSection - 1);
    const scrollTo = previousSection * viewportHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });

    setCurrentSection(previousSection);
  };

  // Update arrow visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const totalSections = getTotalSections();

      // Check if we're at the bottom (within 50px tolerance)
      const isAtBottom = scrolled + viewportHeight >= totalHeight - 50;

      let currentSectionNum;
      if (isAtBottom) {
        currentSectionNum = totalSections - 1;
      } else {
        currentSectionNum = Math.round(scrolled / viewportHeight);
      }

      setCurrentSection(currentSectionNum);

      setIsDownVisible(!isAtBottom);

      setIsUpVisible(hasScrolledDown && currentSectionNum > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledDown]);

  const totalSections = getTotalSections();

  return (
    <>
      {isUpVisible && (
        <div className="fixed top-[10vh] left-1/2 transform -translate-x-1/2 z-40">
          <button
            onClick={scrollToPreviousSection}
            className="btn btn-circle btn-primary shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll up to previous section"
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
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      )}

      {isDownVisible && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <button
            onClick={scrollToNextSection}
            className="btn btn-circle btn-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
            aria-label="Scroll down to next section"
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
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>

          {/* Section indicator dots */}
          <div className="flex justify-center mt-2 space-x-1">
            {Array.from({ length: Math.min(5, totalSections) }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSection
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollArrow;
