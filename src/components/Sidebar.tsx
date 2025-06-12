import ThemeSwitcher from './ThemeSwitcher';

// Icon for Sidebar
function SidebarButton() {
  return (
    <label htmlFor="my-drawer" className="btn btn-square drawer-button ml-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M11.5 10.5L14.5 13.5M21.4999 6.49998L12.4688 15.5312C11.6403 16.3596 10.2972 16.3596 9.46875 15.5312C8.64032 14.7027 8.64032 13.3596 9.46875 12.5312L18.4999 3.49998C19.3283 2.67158 20.6714 2.67155 21.4999 3.49992C22.3284 4.32834 22.3284 5.67153 21.4999 6.49998ZM10.3398 17.75C10.3398 19.545 8.88477 21 7.08984 21H2.5L2.7103 20.8949C3.74629 20.3769 4.26276 19.1915 3.93667 18.08C3.87245 17.8612 3.83395 17.6335 3.85777 17.4067C4.02929 15.7732 5.41089 14.5 7.08984 14.5C8.88477 14.5 10.3398 15.9551 10.3398 17.75Z"
            stroke="currentColor"
          ></path>
        </g>
      </svg>
    </label>
  );
}

export function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <SidebarButton />
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
