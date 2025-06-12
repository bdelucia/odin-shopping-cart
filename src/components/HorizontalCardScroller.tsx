import Card from './cards/Card';
import { HomeCardSkeleton } from './cards/CardSkeleton';
import useFetchProducts from './hooks/useFetchProducts';
import useScrollArrows from './hooks/useScrollArrows';

type HorizontalCardScrollerProps = {
  title: string;
};

function HorizontalCardScroller({ title }: HorizontalCardScrollerProps) {
  const { products, loading, error } = useFetchProducts({ numOfProducts: 10 });
  const {
    scrollContainerRef,
    showLeftArrow,
    showRightArrow,
    scrollLeft,
    scrollRight,
  } = useScrollArrows();

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
            {Array.from({ length: 10 }).map((_, index) => (
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
