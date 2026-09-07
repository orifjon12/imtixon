import { useState } from "react";
import Card from "../../components/card/Card.jsx";
import "./Like.css";
function Like() {
  const [likes] = useState(JSON.parse(localStorage.getItem("likes")) || []);
  if (likes.length === 0) {
    return (
      <div className="nolike">
        <h2>Your wishlist is empty</h2>
      </div>
    );
  }
  return (
    <div className="like">
      <h2>Wishlist</h2>
      <div className="wishlist">
        {likes.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Like;
