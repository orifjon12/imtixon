import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./router/home/Home.jsx";
import Single from "./router/single/Single.jsx";
import Cart from "./router/cart/Cart.jsx";
import Like from "./router/like/Like.jsx";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
