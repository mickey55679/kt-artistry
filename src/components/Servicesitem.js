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
   const item = { category, image, title, description, price };
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
      {/* Call onAddToCart with the item object when the button is clicked */}
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
      {/* Call removeFromCart with the item title and category when the button is clicked */}
      <button onClick={() => removeFromCart(title, category)}>
        Remove from Cart
      </button>
    </div>
  );
}

export default ServicesItem;
