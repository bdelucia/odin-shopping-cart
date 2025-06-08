import '../index.css';
import ThemeSwitcher from './ThemeSwitcher';
function Header() {
  return (
    <header className="navbar bg-primary text-primary-content absolute">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">The Bob Shop</a>
      </div>
      <div className="navbar-end p-2">
        <div id="theme-switcher" className="absolute top-2 right-2">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
