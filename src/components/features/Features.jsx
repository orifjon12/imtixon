import { FaBox, FaTrophy, FaCreditCard, FaHeadphones } from "react-icons/fa";
import "./Features.css";

function Features() {
  const list = [
    { id: 1, icon: <FaBox />, title: "Fasted Delivery", info: "Delivery in 24/H" },
    { id: 2, icon: <FaTrophy />, title: "24 Hours Return", info: "100% money-back guarantee" },
    { id: 3, icon: <FaCreditCard />, title: "Secure Payment", info: "Your money is safe" },
    { id: 4, icon: <FaHeadphones />, title: "Support 24/7", info: "Live contact/message" },
  ];

  return (
    <div className="features">
      <div className="features-box">
        {list.map((item) => (
          <article key={item.id}>
            {item.icon}
            <div className="features-info">
              <h4>{item.title}</h4>
              <p>{item.info}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Features;
