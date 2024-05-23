import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Navbar, Services, Footer, Checkout } from './components';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
      setCart([...cart, item]);
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
              element={<Services addToCart={addToCart} />}
            />
            <Route path="/checkout" element={<Checkout cartItems={cart} />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
