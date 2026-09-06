import { useParams } from "react-router-dom";
import { FaStar, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { products } from "../../mock/data.js";
import "./Single.css";

function Single() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  function addLike() {
    const likes = JSON.parse(localStorage.getItem("likes")) || [];
    const bor = likes.find((item) => item.id === product.id);
    if (bor) {
      localStorage.setItem("likes", JSON.stringify(likes.filter((item) => item.id !== product.id)));
    } else {
      localStorage.setItem("likes", JSON.stringify([...likes, product]));
    }
  }

  function addCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const bor = cart.find((item) => item.id === product.id);
    if (bor) {
      localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item.id !== product.id)));
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  }

  if (!product) {
    return (
      <div className="single-empty">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <div className="single">
      <div className="single-box">
        <div className="single-yol">
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
                <button onClick={addCart}>
                  <FaShoppingCart /> ADD TO CARD
                </button>
              </div>

              <div className="single-like">
                <button onClick={addLike}>
                  <FaRegHeart /> LIKE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
