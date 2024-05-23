import React from "react";

function Checkout({ cartItems }) {
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
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Confirm and Pay</button>
    </div>
  );
}

export default Checkout;
