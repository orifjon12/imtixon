import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-box">
        <div className="banner-light">
          <div className="banner-light-info">
            <h5>INTRODUCING</h5>
            <h2>New Apple Homepod Mini</h2>
            <p>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
            <button>
              SHOP NOW <FaArrowRight />
            </button>
          </div>

          <img src="/images/homepod.png" alt="homepod" />
        </div>

        <div className="banner-dark">
          <div className="banner-dark-info">
            <h5>INTRODUCING NEW</h5>
            <h2>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
            <p>*Data provided by internal laboratories. Industry measurement.</p>
            <button>
              SHOP NOW <FaArrowRight />
            </button>
          </div>

          <img src="/images/xiaomi.png" alt="xiaomi" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
