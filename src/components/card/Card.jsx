import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./Card.css";

function Card({ product }) {
  return (
    <div className="card">
      <Link to={"/product/" + product.id}>
        <div className="card-img">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="card-star">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <p>({product.reviews})</p>
        </div>

        <h3>{product.title}</h3>

        <h4>
          ₹{product.price} {product.oldPrice ? <s>₹{product.oldPrice}</s> : null}
        </h4>
      </Link>
    </div>
  );
}

export default Card;
