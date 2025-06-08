import React from 'react';

function ShoppingCartButton({ count = 0 }) {
  return (
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">{count}</span>
      <label
        htmlFor="my-drawer-4"
        className="drawer-button btn btn-square cursor-pointer"
      >
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
      </label>
    </div>
  );
}

function RightSidebar() {
  return (
    <>
      {/* Just return the button for the navbar */}
      <ShoppingCartButton />

      {/* Drawer structure - position it outside normal flow */}
      <div className="drawer drawer-end fixed inset-0 pointer-events-none z-[1000]">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pointer-events-none"></div>
        <div className="drawer-side pointer-events-auto">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
