import { FaArrowRight } from "react-icons/fa";
import "./Macbook.css";

function Macbook() {
  return (
    <div className="macbook">
      <div className="macbook-box">
        <h5>SAVE UP TO ₹200.00</h5>
        <h2>Macbook Pro</h2>
        <p>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
        <button>
          SHOP NOW <FaArrowRight />
        </button>
        <img src="/images/macbook.png" alt="macbook pro" />
        <h4>₹1999</h4>
      </div>
    </div>
  );
}

export default Macbook;
