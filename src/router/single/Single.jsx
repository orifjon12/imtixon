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
      <div className="notfound">
        <h2>Product not found</h2>
      </div>
    );
  }
  return (
    <div className="single">
      <div className="road">
        <p>{product.category}</p>
      </div>
      <div className="detail">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="about">
          <h2>{product.title}</h2>
          <div className="reviews">
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
          <div className="buttons">
            <button className="add" onClick={addCart}>
              <FaShoppingCart /> ADD TO CARD
            </button>
            <button className="heart" onClick={addLike}>
              <FaRegHeart /> LIKE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Single;
