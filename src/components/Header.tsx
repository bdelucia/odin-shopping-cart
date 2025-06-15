import { Sidebar } from './Sidebar';
import ShoppingCartButton from './ShoppingCartButton';
import ShopButton from './ShopButton';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar bg-primary text-primary-content fixed top-0 left-0 right-0 h-16 z-[999] shadow-lg">
      <div className="navbar-start">
        <Sidebar />
      </div>
      <div className="navbar-center">
        <ShopButton />
        <button
          className="btn normal-case text-xl"
          onClick={handleClick}
          aria-label="Go to home page"
        >
          The Bob Shop
        </button>
        <ShoppingCartButton />
      </div>
      <div className="navbar-end p-2"></div>
    </header>
  );
}

export default Header;
