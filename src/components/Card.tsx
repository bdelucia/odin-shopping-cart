import '../index.css';

type CardProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  price?: string;
};

function Card({
  title = 'Card Title',
  description = 'A card component has a figure, a body part, and inside body there are title and actions parts',
  imageUrl = 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
  imageAlt = 'Product Image',
  buttonText = 'Add to Cart',
  onButtonClick = () => {},
  price = '39.99',
}: CardProps) {
  return (
    <div className="card bg-base-100 w-48 sm:w-64 lg:w-72 shadow-sm z-0">
      <figure className="h-32 sm:h-40 lg:h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-3 sm:p-4 lg:p-6">
        <h2 className="card-title text-sm sm:text-base lg:text-lg">
          {title}
          {price && (
            <div className="badge badge-secondary badge-sm sm:badge-md">
              ${price}
            </div>
          )}
        </h2>
        <p className="text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
        <div className="card-actions justify-end mt-2">
          <button
            className="btn btn-primary btn-xs sm:btn-sm lg:btn-md"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
