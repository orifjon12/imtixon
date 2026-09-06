import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegHeart, FaShoppingCart, FaAngleRight } from "react-icons/fa";
import { products } from "../../mock/data.js";
import "./Single.css";

function Single({ addLike, addCart }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="single-empty">
        <h2>Product not found</h2>
        <Link to="/">Back to home</Link>
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

            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
