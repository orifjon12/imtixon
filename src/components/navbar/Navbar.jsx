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
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
            <Link to="/like">
              <FaRegHeart />
            </Link>
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
