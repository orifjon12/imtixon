import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaEye, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import Card from "../card/Card.jsx";
import { products } from "../../mock/data.js";
import "./Deals.css";

function Deals() {
  const [likes, setLikes] = useState([]);
  const [cart, setCart] = useState([]);

  const big = products[5];

  function addLike(item) {
    const bor = likes.find((element) => element.id === item.id);
    if (bor) {
      setLikes(likes.filter((element) => element.id !== item.id));
    } else {
      setLikes([...likes, item]);
    }
  }

  function addCart(item) {
    const bor = cart.find((element) => element.id === item.id);
    if (bor) {
      setCart(cart.filter((element) => element.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  }

  return (
    <div className="deals">
      <div className="deals-box">
        <div className="deals-top">
          <h2>Best Deals</h2>
          <a>
            Browse All Product <FaArrowRight />
          </a>
        </div>

        <div className="deals-grid">
          <div className="deals-big">
            <img src={big.image} alt={big.title} />

            <div className="deals-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>({big.reviews})</p>
            </div>

            <Link to={"/product/" + big.id}>
              <h3>{big.title}</h3>
            </Link>

            <h4>
              <s>₹{big.oldPrice}</s> ₹{big.price}
            </h4>

            <p>{big.info}</p>

            <div className="deals-icons">
              <div className="deals-like">
                <button onClick={() => addLike(big)}>
                  <FaRegHeart />
                </button>
              </div>

              <div className="deals-cart">
                <button onClick={() => addCart(big)}>
                  <FaShoppingCart /> ADD TO CARD
                </button>
              </div>

              <div className="deals-eye">
                <Link to={"/product/" + big.id}>
                  <FaEye />
                </Link>
              </div>
            </div>
          </div>

          <div className="deals-list">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
