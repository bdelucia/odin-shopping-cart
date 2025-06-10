import ThemeSwitcher from './ThemeSwitcher';

// Icon for Sidebar
function Hamburger() {
  return (
    <label htmlFor="my-drawer" className="btn btn-square drawer-button ml-2">
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
    </label>
  );
}

export function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <Hamburger />
      <div className="drawer-side !z-[999]">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay !z-[998]"
        ></label>
        <ul className="menu bg-base-200 text-base-content h-full p-4 xs:max-w-[50vw] absolute !z-[999] flex justify-center align-middle">
          <div className="flex flex-col items-center">
            <div className="badge badge-accent">Themes</div>
          </div>
          <div className="divider divider-accent gap-0 m-0 p-0"></div>
          <div id="theme-switcher" className="flex justify-center">
            <ThemeSwitcher />
          </div>
        </ul>
      </div>
    </div>
  );
}
