import { FaArrowRight } from "react-icons/fa";
import "./Macbook.css";
function Macbook() {
  return (
    <div className="macbook">
      <div className="apple">
        <div className="pro">
          <h5>SAVE UP TO ₹200.00</h5>
          <h2>Macbook Pro</h2>
          <p>Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
        </div>
        <div className="laptop">
          <img src="/macbook.png" alt="macbook pro" />
        </div>
      </div>
    </div>
  );
}
export default Macbook;
