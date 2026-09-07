import { FaArrowRight, FaAmazon } from "react-icons/fa";
import { SiGoogle, SiSamsung, SiToshiba, SiSony } from "react-icons/si";
import "./Newsletter.css";
function Newsletter() {
  return (
    <div className="newsletter">
      <h2>Subscribe to our newsletter</h2>
      <p>
        Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non
        quam urna. Quisque vitae porta ipsum.
      </p>
      <form>
        <input type="text" placeholder="Email address" />
        <button type="button">
          SUBSCRIBE <FaArrowRight />
        </button>
      </form>
      <nav className="brands">
        <SiGoogle />
        <FaAmazon />
        <SiSamsung />
        <SiToshiba />
        <SiSony />
      </nav>
    </div>
  );
}
export default Newsletter;
