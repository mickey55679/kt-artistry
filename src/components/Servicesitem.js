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
      <button
        className="add-btn"
        onClick={(event) => {
          event.preventDefault();
          onAddToCart(item);
        }}
      >
        Add to cart
      </button>

      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.title, item.id)}
      >
        Remove 
      </button>
    </div>
  );
}

export default ServicesItem;
