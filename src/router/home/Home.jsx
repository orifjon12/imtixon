import Hero from "../../components/hero/Hero.jsx";
import Category from "../../components/category/Category.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Card from "../../components/card/Card.jsx";
import Features from "../../components/features/Features.jsx";
import Deals from "../../components/deals/Deals.jsx";
import Macbook from "../../components/macbook/Macbook.jsx";
import Lists from "../../components/lists/Lists.jsx";
import News from "../../components/news/News.jsx";
import Newsletter from "../../components/newsletter/Newsletter.jsx";
import { FaArrowRight } from "react-icons/fa";
import { products } from "../../mock/data.js";
import "./Home.css";

function Home() {
  const accessories = [...products].reverse();

  return (
    <div className="home">
      <Hero />
      <Features />
      <Deals />
      <Category />

      <div className="featured">
        <div className="featured-box">
          <div className="promo">
            <h5>COMPUTER & ACCESSORIES</h5>
            <h2>32% Discount</h2>
            <p>For all electronics products</p>
            <h4>
              Offers ends in : <b>ENDS OF CHRISTMAS</b>
            </h4>
            <button>
              SHOP NOW <FaArrowRight />
            </button>
            <img src="/images/promo.jpg" alt="promo" />
          </div>

          <div className="products">
            <div className="products-top">
              <h2>Featured Products</h2>
              <nav>
                <a>All Product</a>
                <a>Smart Phone</a>
                <a>Laptop</a>
                <a>Headphone</a>
                <a>TV</a>
                <h4>Browse All Product</h4>
              </nav>
            </div>

            <div className="products-grid">
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Banner />

      <div className="accessories">
        <div className="accessories-box">
          <div className="products">
            <div className="products-top">
              <h2>Computer Accessories</h2>
              <nav>
                <a>All Product</a>
                <a>Keyboard & Mouse</a>
                <a>Headphones</a>
                <a>Webcam</a>
                <a>Printer</a>
                <h4>Browse All Product</h4>
              </nav>
            </div>

            <div className="products-grid">
              {accessories.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="side">
            <div className="side-yellow">
              <img src="/images/earbuds.png" alt="earbuds" />
              <h3>Xiaomi True Wireless Earbuds</h3>
              <p>Escape the noise, It is time to hear the magic with Xiaomi Earbuds.</p>
              <h4>
                Only for : <b>₹299 USD</b>
              </h4>
              <button>
                SHOP NOW <FaArrowRight />
              </button>
            </div>

            <div className="side-blue">
              <h5>SUMMER SALES</h5>
              <h3>37% DISCOUNT</h3>
              <p>
                only for <b>SmartPhone</b> product.
              </p>
              <button>
                SHOP NOW <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Macbook />
      <Lists />
      <News />
      <Newsletter />
    </div>
  );
}

export default Home;
