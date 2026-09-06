import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Router from "./router/Router.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  const [likes, setLikes] = useState([]);
  const [cart, setCart] = useState([]);

  function addLike(product) {
    const bor = likes.find((item) => item.id === product.id);
    if (bor) {
      setLikes(likes.filter((item) => item.id !== product.id));
    } else {
      setLikes([...likes, product]);
    }
  }

  function addCart(product) {
    const bor = cart.find((item) => item.id === product.id);
    if (bor) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  }

  return (
    <div className="app">
      <Navbar />
      <Router likes={likes} cart={cart} addLike={addLike} addCart={addCart} />
      <Footer />
    </div>
  );
}

export default App;
