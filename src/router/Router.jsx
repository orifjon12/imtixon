import { Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Single from "./single/Single.jsx";
import Cart from "./cart/Cart.jsx";
import Like from "./like/Like.jsx";

function Router({ likes, cart, addLike, addCart }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Single addLike={addLike} addCart={addCart} />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path="/like" element={<Like likes={likes} />} />
    </Routes>
  );
}

export default Router;
