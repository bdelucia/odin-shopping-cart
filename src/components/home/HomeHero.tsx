import { useNavigate } from 'react-router-dom';
import HeroImage from '../../assets/hero.webp';
import { motion } from 'framer-motion';

function HomeHero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/shop');
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic text-primary">
              Hello there!
            </h1>
            <p className="mb-5 text-white text-sm sm:text-base lg:text-lg">
              Welcome to <span className="italic font-bold">The Bob Shop.</span>{' '}
              Bobbeh has wares if you have coin.
            </p>
            <button
              className="btn btn-accent btn-sm sm:btn-md lg:btn-lg"
              onClick={handleClick}
              aria-label="Browse wares and shop items"
            >
              Browse Wares
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
