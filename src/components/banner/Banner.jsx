import { FaArrowRight } from "react-icons/fa";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="homepod">
        <div className="mini">
          <h5>INTRODUCING</h5>
          <h2>New Apple Homepod Mini</h2>
          <p>Jam-packed with innovation, HomePod mini delivers unexpectedly.</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
        </div>
        <div className="pod">
          <img src="/homepod.png" alt="homepod" />
        </div>
      </div>
      <div className="mi">
        <div className="ultra">
          <h5>INTRODUCING NEW</h5>
          <h2>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
          <p>*Data provided by internal laboratories. Industry measurement.</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
        </div>
        <div className="eleven">
          <img src="/xiaomi.png" alt="xiaomi" />
        </div>
      </div>
    </div>
  );
}
export default Banner;
