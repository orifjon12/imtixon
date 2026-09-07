import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaKeyboard,
  FaCamera,
  FaTv,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./Category.css";
function Category() {
  const list = [
    { id: 1, name: "Computer & Laptop", icon: <FaLaptop /> },
    { id: 2, name: "SmartPhone", icon: <FaMobileAlt /> },
    { id: 3, name: "Headphones", icon: <FaHeadphones /> },
    { id: 4, name: "Accessories", icon: <FaKeyboard /> },
    { id: 5, name: "Camera & Photo", icon: <FaCamera /> },
    { id: 6, name: "TV & Homes", icon: <FaTv /> },
  ];
  return (
    <div className="category">
      <h2>Shop with Categories</h2>
      <div className="slider">
        <button className="arrow">
          <FaArrowLeft />
        </button>
        <div className="boxes">
          {list.map((item) => (
            <div className="item" key={item.id}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <button className="arrow">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
export default Category;
