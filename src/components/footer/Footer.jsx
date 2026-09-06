import { FaPhoneAlt, FaGooglePlay, FaApple, FaArrowRight } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const taglar = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footer-top">
          <div className="footer-about">
            <h2>Clicon</h2>
            <h5>Customer Supports:</h5>
            <h4>
              <FaPhoneAlt /> +1-202-555-0104
            </h4>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <p>info@clicon.com</p>
          </div>

          <div className="footer-menu">
            <h3>TOP CATEGORY</h3>
            <a>Computer & Laptop</a>
            <a>SmartPhone</a>
            <a>Headphone</a>
            <a>Accessories</a>
            <a>Camera & Photo</a>
            <a>TV & Homes</a>
            <h4>
              Browse All Product <FaArrowRight />
            </h4>
          </div>

          <div className="footer-menu">
            <h3>QUICK LINKS</h3>
            <a>Shop Product</a>
            <a>Shoping Cart</a>
            <a>Wishlist</a>
            <a>Compare</a>
            <a>Track Order</a>
            <a>Customer Help</a>
            <a>About Us</a>
          </div>

          <div className="footer-app">
            <h3>DOWNLOAD APP</h3>
            <button>
              <FaGooglePlay />
              <div>
                <p>Get it now</p>
                <h4>Google Play</h4>
              </div>
            </button>
            <button>
              <FaApple />
              <div>
                <p>Get it now</p>
                <h4>App Store</h4>
              </div>
            </button>
          </div>

          <div className="footer-tag">
            <h3>POPULAR TAG</h3>
            <div className="footer-tag-list">
              {taglar.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Clicon - eCommerce Template &copy; 2026. Design by Templatecookie</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
