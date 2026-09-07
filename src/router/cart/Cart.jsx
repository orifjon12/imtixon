import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
function Cart() {
  const [cart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  if (cart.length === 0) {
    return (
      <div className="nocart">
        <h2>Your cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="basket">
        {cart.map((product) => (
          <div className="goods" key={product.id}>
            <div className="photo">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="price">
              <Link to={"/product/" + product.id}>
                <h3>{product.title}</h3>
              </Link>
              <h4>₹{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Cart;
