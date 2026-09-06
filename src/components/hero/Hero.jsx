import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-box">
        <div className="hero-big">
          <div className="hero-info">
            <h5>THE BEST PLACE TO PLAY</h5>
            <h1>Xbox Consoles</h1>
            <p>
              Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for ₹2 USD.
            </p>
            <button>
              SHOP NOW <FaArrowRight />
            </button>
          </div>

          <h4>₹299</h4>

          <img src="/images/xbox.png" alt="xbox" />
        </div>

        <div className="hero-side">
          <div className="hero-dark">
            <div className="hero-dark-info">
              <div className="hero-dark-top">
                <h5>SUMMER SALES</h5>
                <h4>29% OFF</h4>
              </div>

              <h3>New Google Pixel 6 Pro</h3>

              <button>
                SHOP NOW <FaArrowRight />
              </button>
            </div>

            <img src="/images/pixel.png" alt="google pixel" />
          </div>

          <div className="hero-light">
            <img src="/images/flipbuds.png" alt="xiaomi flipbuds" />

            <div className="hero-light-info">
              <h3>Xiaomi FlipBuds Pro</h3>
              <h4>₹299 USD</h4>
              <button>
                SHOP NOW <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
