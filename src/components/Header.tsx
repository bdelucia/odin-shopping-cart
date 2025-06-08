import '../index.css';
import { LeftSidebar, RightSidebar } from './Sidebars';

function Header() {
  return (
    <header className="navbar bg-primary text-primary-content fixed top-0 left-0 right-0 h-[7vh] z-[999]">
      <div className="navbar-start">
        <LeftSidebar />
      </div>
      <div className="navbar-center">
        <a className="btn normal-case text-xl">The Bob Shop</a>
      </div>
      <div className="navbar-end p-2">
        <RightSidebar />
      </div>
    </header>
  );
}

export default Header;
