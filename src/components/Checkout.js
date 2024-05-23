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
            <button
              className="button-75"
              onClick={() => removeFromCart(item.title, item.id)}
            >
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirm and Pay</button>
    </div>
  );
}

export default Checkout;
