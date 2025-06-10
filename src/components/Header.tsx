import { Sidebar } from './Sidebar';
import ShoppingCartButton from './ShoppingCartButton';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <header className="navbar bg-primary text-primary-content fixed top-0 left-0 right-0 h-[7dvh] z-[999]">
      <div className="navbar-start">
        <Sidebar />
      </div>
      <div className="navbar-center">
        <a className="btn normal-case text-xl" onClick={handleClick}>
          The Bob Shop
        </a>
      </div>
      <div className="navbar-end p-2">
        <ShoppingCartButton />
      </div>
    </header>
  );
}

export default Header;
