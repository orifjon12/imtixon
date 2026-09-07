import { Link } from "react-router-dom";
import { FaStar, FaArrowRight } from "react-icons/fa";
import Card from "../card/Card.jsx";
import { products } from "../../mock/data.js";
import "./Deals.css";
function Deals() {
  const big = products[5];
  return (
    <div className="deals">
      <div className="best">
        <h2>Best Deals</h2>
        <a>
          Browse All Product <FaArrowRight />
        </a>
      </div>
      <div className="row">
        <div className="big">
          <img src={big.image} alt={big.title} />
          <div className="rating">
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
        </div>
        <div className="small">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Deals;
