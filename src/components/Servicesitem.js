import React from "react";

const ServicesItem = ({
  category,
  image,
  title,
  description,
  price,
  onAddToCart,
  removeFromCart,
}) => {
  return (
    <div className="content">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <div>
        <button onClick={() => onAddToCart({ title, price })}>
          Add to Cart
        </button>
        <button onClick={() => removeFromCart({ title, price })}>Remove</button>
      </div>
    </div>
  );
};

export default ServicesItem;
