import ScrollArrow from './ScrollArrow';
import HorizontalCardScroller from './HorizontalCardScroller';
import Hero from './HomeHero';

function HomePage() {
  return (
    <>
      <Hero />

      <section className="min-h-[100dvh] bg-base-200 flex flex-col justify-center py-8 sm:py-16">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Featured Products" />
        </div>
      </section>

      <section className="min-h-[100dvh] bg-secondary flex flex-col items-center justify-center py-8 sm:py-16">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Recommended For You" />
        </div>
      </section>

      <ScrollArrow />
    </>
  );
}

export default HomePage;
