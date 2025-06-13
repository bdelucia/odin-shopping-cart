import '../styles/QuantitySelector.css';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

function CartQuantitySelector({
  value,
  min = 1,
  max = 99,
  onChange,
}: QuantitySelectorProps) {
  const handleDecrease = (): void => {
    const newValue = Math.max(min, value - 1);
    onChange?.(newValue);
  };

  const handleIncrease = (): void => {
    const newValue = Math.min(max, value + 1);
    onChange?.(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputValue = parseInt(e.target.value) || min;
    const newValue = Math.max(min, Math.min(max, inputValue));
    onChange?.(newValue);
  };

  return (
    <div className="join">
      {value === 1 ? (
        <button
          className="join-item btn btn-error btn-soft border-error btn-xs sm:btn-xs md:btn-xs lg:btn-sm btn-square"
          onClick={handleDecrease}
          disabled={value <= min}
        >
          {value === 1 ? (
            // Trash can icon when quantity is 1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          ) : (
            // Minus icon for all other quantities
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          )}
        </button>
      ) : (
        <button
          className="join-item btn btn-primary btn-soft border-primary btn-xs sm:btn-xs md:btn-xs lg:btn-sm btn-ghost btn-square"
          onClick={handleDecrease}
          disabled={value <= min}
        >
          {value === 1 ? (
            // Trash can icon when quantity is 1
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          ) : (
            // Minus icon for all other quantities
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          )}
        </button>
      )}
      <input
        type="number"
        className="join-item no-spinner input input-primary input-xs sm:input-xs sm:w-12 md:input-xs lg:input-sm md:w-14 text-center font-semibold lg:text-lg"
        value={value}
        onChange={handleInputChange}
        min={min}
        max={max}
      />
      <button
        className="join-item btn btn-primary btn-soft border-primary btn-xs md:btn-xs lg:btn-sm sm:btn-xs btn-ghost btn-square"
        onClick={handleIncrease}
        disabled={value >= max}
      >
        {/* plus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartQuantitySelector;
