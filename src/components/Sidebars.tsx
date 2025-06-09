import ThemeSwitcher from './ThemeSwitcher';

// icon with indicator for rightsidebar
function ShoppingCartButton({ count = 0 }) {
  return (
    <label htmlFor="my-drawer-4" className="btn btn-square drawer-button ml-2">
      <div className="indicator">
        <span className="indicator-item size-5 badge badge-accent">
          {count}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </label>
  );
}

// Icon for LeftSidebar
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

// Left sidebar, uses DaisyUI drawer component
export function LeftSidebar() {
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
        <ul className="menu bg-base-200 text-base-content w-52 sm:w-64 p-2 sm:p-4 absolute top-[7vh] bottom-0 !z-[999]">
          <div className="flex justify-center">
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

// Right sidebar, uses DaisyUI drawer component
export function RightSidebar() {
  return (
    <div className="drawer drawer-end navbar-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <ShoppingCartButton />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content w-72 p-4 absolute top-[7vh] bottom-0 !z-[999]">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
