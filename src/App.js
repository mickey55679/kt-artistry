import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Navbar, Services, Footer, Checkout } from './components';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  
  const addToCart = (title, downpayment) => {
    const id = Date.now(); // Generate a unique ID
    const newCartItem = { id, title, downpayment }; // Include ID in the cart item
    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to localStorage
  };

  
 const removeFromCart = (title, id) => {
   const updatedCart = cart.filter(
     (item) => item.id !== id || item.title !== title
   );
   setCart(updatedCart);
   localStorage.setItem("cart", JSON.stringify(updatedCart));
 };


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar cartCount={cart.length} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route
              path="/Services"
              element={
                <Services
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout cartItems={cart} removeFromCart={removeFromCart} />
              }
            />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
