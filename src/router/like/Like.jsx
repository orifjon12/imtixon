import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Card from "../../components/card/Card.jsx";
import "./Like.css";

function Like({ likes }) {
  if (likes.length === 0) {
    return (
      <div className="like-empty">
        <h2>Your wishlist is empty</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="like">
      <div className="like-box">
        <div className="like-yol">
          <Link to="/">Home</Link>
          <FaAngleRight />
          <p>Wishlist</p>
        </div>

        <h2>Wishlist</h2>

        <div className="like-grid">
          {likes.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Like;
