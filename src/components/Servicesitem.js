import React from "react";

function ServicesItem({
  category,
  image,
  title,
  description,
  price,
  onAddToCart,
  removeFromCart,
}) {
  return (
    <div className="service-item">
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
      <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
  );
}

export default ServicesItem;
