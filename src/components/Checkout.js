import React from "react";

function Checkout({ cartItems, removeFromCart }) {
  const handleCheckout = () => {
    // Implement the checkout logic here
    alert("Checkout successful!");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - Downpayment: ${item.downpayment}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirm and Pay</button>
    </div>
  );
}

export default Checkout;
