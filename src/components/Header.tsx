import '../index.css';
import ShoppingCartButton from './ShoppingCartButton';
import Sidebar from './Sidebar';

function Header() {
  return (
    <header className="navbar bg-primary text-primary-content fixed top-0 left-0 right-0 h-[7vh]">
      <div className="navbar-start">
        <Sidebar />
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">The Bob Shop</a>
      </div>
      <div className="navbar-end p-2">
        <ShoppingCartButton />
      </div>
    </header>
  );
}

export default Header;
