import { FaBox, FaTrophy, FaCreditCard, FaHeadphones } from "react-icons/fa";
import "./Features.css";
function Features() {
  const list = [
    { id: 1, icon: <FaBox />, title: "FASTED DELIVERY", info: "Delivery in 24/H" },
    { id: 2, icon: <FaTrophy />, title: "24 HOURS RETURN", info: "100% money-back guarantee" },
    { id: 3, icon: <FaCreditCard />, title: "SECURE PAYMENT", info: "Your money is safe" },
    { id: 4, icon: <FaHeadphones />, title: "SUPPORT 24/7", info: "Live contact/message" },
  ];
  return (
    <div className="features">
      <div className="delivery">
        {list.map((item) => (
          <article key={item.id}>
            {item.icon}
            <div className="support">
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
