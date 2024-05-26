// Importing necessary CSS and React components
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Navbar, Services, Footer, Checkout } from "./components";

function App() {
  // State hook for managing cart items
  const [cart, setCart] = useState([]);

  // Effect hook for retrieving cart data from local storage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Parse and set the saved cart
    }
  }, []); // This effect runs only once when the component mounts

  // Function to add an item to the cart
  const addToCart = (item) => {
    console.log("Adding to cart", item);
    const updatedCart = [...cart, item]; // Create a new array with the new item
    setCart(updatedCart); // Update cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the new cart to local storage
  };

  // Function to remove an item from the cart based on title and id
  const removeFromCart = (title, id) => {
    console.log("Removing from cart", title, id);
    const updatedCart = cart.filter(
      (item) => item.id !== id || item.title !== title // Filter out the item to remove
    );
    setCart(updatedCart); // Update cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save the updated cart to local storage
  };

  // Setting up router and routes for different pages in the application
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar cartCount={cart.length} />
           {/* // Display navbar with cart count */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> 
            {/* // Route for Home page */}
            <Route path="/About" element={<About />} />
             {/* // Route for About page */}
            <Route
              path="/Services"
              element={
                <Services
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            />{" "}
            {/* // Route for Services page with cart management functions */}
            <Route
              path="/checkout"
              element={
                <Checkout cartItems={cart} removeFromCart={removeFromCart} />
              }
            />{" "}
            {/* // Route for Checkout page with cart review functionality */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer /> {/* // Display footer component */}
        </main>
      </div>
    </Router>
  );
}

export default App;
