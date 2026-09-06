import { Link } from "react-router-dom";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
  FaRegUser,
  FaTh,
  FaTruck,
  FaExchangeAlt,
  FaHeadphones,
  FaQuestionCircle,
  FaPhoneAlt,
  FaAngleDown,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-black">
        <div className="navbar-black-box">
          <div className="navbar-black-name">
            <h4>Black</h4>
            <h3>Friday</h3>
          </div>

          <p>Up to 59% OFF</p>
          <button>
            SHOP NOW <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="navbar-top">
        <div className="navbar-top-box">
          <p>Welcome to Clicon online eCommerce store.</p>
          <nav>
            <p>Follow us :</p>
            <FaFacebookF />
            <FaTwitter />
            <FaPinterestP />
            <FaRedditAlien />
            <FaYoutube />
            <FaInstagram />
            <a>
              Eng <FaAngleDown />
            </a>
            <a>
              USD <FaAngleDown />
            </a>
          </nav>
        </div>
      </div>

      <div className="navbar-main">
        <div className="navbar-main-box">
          <Link to="/">
            <h2>Clicon</h2>
          </Link>

          <div className="navbar-search">
            <FaSearch />
            <input type="text" placeholder="Search for anything..." />
          </div>

          <div className="navbar-icons">
            <FaShoppingCart />
            <FaRegHeart />
            <FaRegUser />
          </div>
        </div>
      </div>

      <div className="navbar-menu">
        <div className="navbar-menu-box">
          <button>
            <FaTh /> All Category <FaAngleDown />
          </button>

          <nav>
            <a>
              <FaTruck /> Track Order
            </a>
            <a>
              <FaExchangeAlt /> Compare
            </a>
            <a>
              <FaHeadphones /> Customer Support
            </a>
            <a>
              <FaQuestionCircle /> Need Help
            </a>
          </nav>

          <h4>
            <FaPhoneAlt /> +1-202-555-0104
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
