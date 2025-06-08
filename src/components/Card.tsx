import React from 'react';
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
    <div className="card bg-base-100 w-72 shadow-sm">
      <figure>
        <img src={imageUrl} alt={imageAlt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {price && <div className="badge badge-secondary">${price}</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-soft" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
