import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-box">
        <div className="banner-light">
          <h5>INTRODUCING</h5>
          <h2>New Apple Homepod Mini</h2>
          <p>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
          <img src="/images/homepod.png" alt="homepod" />
        </div>

        <div className="banner-dark">
          <h5>INTRODUCING NEW</h5>
          <h2>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
          <p>*Data provided by internal laboratories. Industry measurement.</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
          <img src="/images/xiaomi.png" alt="xiaomi" />
          <h4>₹590</h4>
        </div>
      </div>
    </div>
  );
}

export default Banner;
