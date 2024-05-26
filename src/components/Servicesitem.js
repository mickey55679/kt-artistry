import React from "react";

// ServicesItem component receives props including category, image, title, description, price, onAddToCart, and removeFromCart
function ServicesItem({
  category,
  image,
  title,
  description,
  price,
  onAddToCart,
  removeFromCart,
}) {
  // Creating an 'item' object from received props
  const item = { category, image, title, description, price };

  return (
    <div className="service-item">
      {/* Displaying service item image */}
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: "4px" }}
      />
      {/* Displaying service item title */}
      <h3>{title}</h3>
      {/* Displaying service item description */}
      <p>{description}</p>
      {/* Displaying service item price */}
      <p>${price}</p>
      {/* Button to add item to cart */}
      <button
        className="add-btn"
        onClick={(event) => {
          event.preventDefault();
          onAddToCart(item); // Call 'onAddToCart' function with 'item' object as argument
        }}
      >
        Add to cart
      </button>
      {/* Button to remove item from cart */}
      <button
        className="remove-btn"
        onClick={() => removeFromCart(item.title, item.id)} // Call 'removeFromCart' function with title and id as arguments
      >
        Remove
      </button>
    </div>
  );
}

export default ServicesItem;
