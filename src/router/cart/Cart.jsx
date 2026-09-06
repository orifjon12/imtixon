import { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const [cart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-box">
        <h2>Shopping Cart</h2>

        <div className="cart-list">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />

              <div className="cart-item-info">
                <Link to={"/product/" + product.id}>
                  <h3>{product.title}</h3>
                </Link>
                <h4>₹{product.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
