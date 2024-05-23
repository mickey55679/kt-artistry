import React from "react";

function ServicesItem({
  category,
  image,
  title,
  description,
  price,
  onAddToCart,
  removeFromCart, // Receive removeFromCart function as a prop
}) {
  const downpayment = (price * 0.3).toFixed(2); // 30% downpayment

  return (
    <div className={`column ${category}`}>
      {image && <img src={image} alt={title} style={{ width: "100%" }} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Downpayment: ${downpayment}</p>
      <button onClick={() => onAddToCart(title, downpayment)}>
        Add to Cart
      </button>
      <button onClick={() => removeFromCart(title)}>Remove from Cart</button>

    </div>
  );
}


export default ServicesItem;
