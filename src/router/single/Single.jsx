import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaShoppingCart, FaAngleRight } from "react-icons/fa";
import { products } from "../../mock/data.js";
import "./Single.css";

function Single() {
  const { id } = useParams();
  const [likes, setLikes] = useState([]);
  const [cart, setCart] = useState([]);

  const product = products.find((item) => item.id === Number(id));

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

  if (!product) {
    return (
      <div className="single-empty">
        <h2>Mahsulot topilmadi</h2>
        <Link to="/">Bosh sahifaga qaytish</Link>
      </div>
    );
  }

  return (
    <div className="single">
      <div className="single-box">
        <div className="single-yol">
          <Link to="/">Home</Link>
          <FaAngleRight />
          <p>{product.category}</p>
        </div>

        <div className="single-karta">
          <div className="single-img">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="single-info">
            <h2>{product.title}</h2>

            <div className="single-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>({product.reviews} reviews)</p>
            </div>

            <h3>
              ₹{product.price} {product.oldPrice ? <s>₹{product.oldPrice}</s> : null}
            </h3>

            <p>{product.info}</p>

            <div className="single-icons">
              <div className="single-cart">
                <button onClick={() => addCart(product)}>
                  <FaShoppingCart /> ADD TO CARD
                </button>
              </div>

              <div className="single-like">
                <button onClick={() => addLike(product)}>
                  <FaRegHeart /> LIKE
                </button>
              </div>
            </div>

            <Link to="/">Bosh sahifaga qaytish</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
