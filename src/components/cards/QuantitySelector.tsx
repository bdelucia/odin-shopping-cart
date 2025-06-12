import '../../styles/QuantitySelector.css';

interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

function QuantitySelector({
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
      <button
        className="join-item btn btn-primary btn-soft border-primary btn-xs sm:btn-xs md:btn-xs lg:btn-sm btn-ghost btn-square"
        onClick={handleDecrease}
        disabled={value <= min}
      >
        {/* minus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
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

export default QuantitySelector;
