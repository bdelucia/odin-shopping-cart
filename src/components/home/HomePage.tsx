import ScrollArrow from './ScrollArrow';
import HorizontalCardScroller from './HorizontalCardScroller';
import Hero from './HomeHero';

function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="min-h-[100dvh] bg-base-200 flex flex-col justify-center py-8 sm:py-16">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Featured Products" />
        </div>
      </div>

      <div className="min-h-[100dvh] bg-secondary flex flex-col items-center justify-center py-8 sm:py-16">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Recommended For You" />
        </div>
      </div>

      <ScrollArrow />
    </div>
  );
}

export default HomePage;
