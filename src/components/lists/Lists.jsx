import { products } from "../../mock/data.js";
import "./Lists.css";

function Lists() {
  const columns = [
    { id: 1, name: "Flash Sale Today", items: products.slice(0, 3) },
    { id: 2, name: "Best Sellers", items: products.slice(3, 6) },
    { id: 3, name: "Top Rated", items: products.slice(4, 7) },
    { id: 4, name: "New Arrival", items: products.slice(5, 8) },
  ];

  return (
    <div className="lists">
      <div className="lists-box">
        {columns.map((column) => (
          <div className="lists-column" key={column.id}>
            <h2>{column.name}</h2>

            {column.items.map((product) => (
              <article key={product.id}>
                <img src={product.image} alt={product.title} />
                <div className="lists-info">
                  <h3>{product.title}</h3>
                  <h4>₹{product.price}</h4>
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lists;
