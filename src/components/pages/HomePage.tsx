import ScrollArrow from '../ScrollArrow';
import HorizontalCardScroller from '../HorizontalCardScroller';
import Hero from '../Hero';

function HomePage() {
  return (
    <>
      <Hero />

      <section className="h-[100vh] bg-base-200 flex flex-col justify-center py-16">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Featured Products" />
        </div>
      </section>

      <section className="h-[100vh] bg-secondary flex flex-col items-center justify-center">
        <div className="container mx-auto">
          <HorizontalCardScroller title="Recommended For You" />
        </div>
      </section>

      <ScrollArrow />
    </>
  );
}

export default HomePage;
