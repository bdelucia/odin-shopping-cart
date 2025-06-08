import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

function Hamburger() {
  return (
    <label
      htmlFor="my-drawer"
      className="btn btn-circle swap swap-rotate drawer-button"
    >
      {/* this hidden checkbox controls the state */}
      <input type="checkbox" />

      {/* hamburger icon */}
      <svg
        className="swap-off fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
      </svg>

      {/* close icon */}
      <svg
        className="swap-on fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 512 512"
      >
        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
      </svg>
    </label>
  );
}

function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Hamburger />
      </div>
      <div className="drawer-side !z-[999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay !z-[998]"
        ></label>
        <ul className="menu bg-base-200 text-base-content w-64 p-4 absolute top-[7vh] bottom-0 !z-[999]">
          <div id="theme-switcher" className="flex justify-center">
            <ThemeSwitcher />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
