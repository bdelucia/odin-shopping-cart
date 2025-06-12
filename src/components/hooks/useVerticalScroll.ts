// hooks/useVerticalScroll.ts
import { useState, useEffect } from 'react';

interface UseVerticalScrollOptions {
  scrollOffset?: number; // Percentage offset for mobile landscape (default: 0.9)
  bottomThreshold?: number; // Pixels from bottom to consider "at bottom" (default: 50)
  scrollBehavior?: ScrollBehavior; // 'smooth' or 'auto' (default: 'smooth')
}

interface UseVerticalScrollReturn {
  currentSection: number;
  totalSections: number;
  isUpVisible: boolean;
  isDownVisible: boolean;
  isMobileLandscape: boolean;
  scrollToNextSection: () => void;
  scrollToPreviousSection: () => void;
}

const useVerticalScroll = ({
  scrollOffset = 0.9,
  bottomThreshold = 50,
  scrollBehavior = 'smooth',
}: UseVerticalScrollOptions = {}): UseVerticalScrollReturn => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isDownVisible, setIsDownVisible] = useState(true);
  const [isUpVisible, setIsUpVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  // Detect if we're on mobile landscape
  const isMobileLandscapeCheck = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    return isLandscape && isMobile;
  };

  const [isMobileLandscape, setIsMobileLandscape] = useState(
    isMobileLandscapeCheck()
  );

  // Get the actual viewport height accounting for browser chrome
  const getViewportHeight = () => {
    // Use visualViewport if available (better for mobile)
    if (window.visualViewport) {
      return window.visualViewport.height;
    }
    return window.innerHeight;
  };

  // Calculate total sections based on page height
  const getTotalSections = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = getViewportHeight();
    return Math.ceil(totalHeight / viewportHeight);
  };

  const [totalSections, setTotalSections] = useState(getTotalSections());

  const scrollToNextSection = () => {
    const viewportHeight = getViewportHeight();
    const totalHeight = document.documentElement.scrollHeight;
    const totalSectionsCount = getTotalSections();
    const nextSection = currentSection + 1;

    // Add offset for mobile landscape
    const scrollOffsetValue = isMobileLandscape
      ? viewportHeight * scrollOffset
      : viewportHeight;

    // If going to last section and it's shorter than viewport, scroll to bottom
    if (nextSection === totalSectionsCount - 1) {
      window.scrollTo({
        top: totalHeight - viewportHeight,
        behavior: scrollBehavior,
      });
    } else {
      const scrollTo = nextSection * scrollOffsetValue;
      window.scrollTo({
        top: scrollTo,
        behavior: scrollBehavior,
      });
    }

    setCurrentSection(nextSection);
    setHasScrolledDown(true);
  };

  const scrollToPreviousSection = () => {
    const viewportHeight = getViewportHeight();
    const previousSection = Math.max(0, currentSection - 1);

    // Add offset for mobile landscape
    const scrollOffsetValue = isMobileLandscape
      ? viewportHeight * scrollOffset
      : viewportHeight;
    const scrollTo = previousSection * scrollOffsetValue;

    window.scrollTo({
      top: scrollTo,
      behavior: scrollBehavior,
    });

    setCurrentSection(previousSection);
  };

  // Update state based on scroll position and viewport changes
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewportHeight = getViewportHeight();
      const totalHeight = document.documentElement.scrollHeight;
      const totalSectionsCount = getTotalSections();

      // Check if we're at the bottom
      const isAtBottom =
        scrolled + viewportHeight >= totalHeight - bottomThreshold;

      let currentSectionNum;
      if (isAtBottom) {
        currentSectionNum = totalSectionsCount - 1;
      } else {
        currentSectionNum = Math.round(scrolled / viewportHeight);
      }

      setCurrentSection(currentSectionNum);
      setTotalSections(totalSectionsCount);
      setIsDownVisible(!isAtBottom);
      setIsUpVisible(hasScrolledDown && currentSectionNum > 0);
    };

    const handleViewportChange = () => {
      setIsMobileLandscape(isMobileLandscapeCheck());
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleViewportChange);

    // Listen for visual viewport changes if available
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
    }

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleViewportChange);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener(
          'resize',
          handleViewportChange
        );
      }
    };
  });

  return {
    currentSection,
    totalSections,
    isUpVisible,
    isDownVisible,
    isMobileLandscape,
    scrollToNextSection,
    scrollToPreviousSection,
  };
};

export default useVerticalScroll;
