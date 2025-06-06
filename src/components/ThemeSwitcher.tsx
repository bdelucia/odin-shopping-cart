import '../index.css';
import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <div className="dropdown mb-72">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-white rounded-box z-1 p-2 shadow-2xl"
        >
          <li>
            <button
              data-set-theme="luxury"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              Default
            </button>
          </li>
          <li>
            <button
              data-set-theme="sunset"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              Sunset
            </button>
          </li>
          <li>
            <button
              data-set-theme="cmyk"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              CMYK
            </button>
          </li>
          <li>
            <button
              data-set-theme="cupcake"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              Cupcake
            </button>
          </li>
          <li>
            <button
              data-set-theme="dracula"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              Dracula
            </button>
          </li>
          <li>
            <button
              data-set-theme="business"
              data-act-class="active"
              className="w-full btn btn-sm btn-ghost justify-start"
            >
              Business
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ThemeSwitcher;
