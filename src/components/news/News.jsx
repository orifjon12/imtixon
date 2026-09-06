import { FaRegUser, FaRegCalendarAlt, FaRegComments, FaArrowRight } from "react-icons/fa";
import "./News.css";

function News() {
  const list = [
    {
      id: 1,
      image: "/images/promo.jpg",
      author: "Kevin",
      date: "March 5, 2026",
      comments: "928",
      title: "Curabitur porttitor orci eget neque accumsan venenatis nunc",
      info: "Nam ultricies elit sed lorem lobortis, in dapibus lectus rhoncus. Aenean lobortis lacus a diam faucibus.",
    },
    {
      id: 2,
      image: "/images/6.png",
      author: "Kevin",
      date: "March 5, 2026",
      comments: "1,024",
      title: "Vestibulum eu quam nec neque pellentesque efficitur donec",
      info: "Mauris vel sagittis quam. Nulla facilisi. Curabitur ac massa eget nunc dictum tincidunt vitae ut arcu.",
    },
    {
      id: 3,
      image: "/images/1.png",
      author: "Kevin",
      date: "March 5, 2026",
      comments: "618",
      title: "Fusce nec sapien in erat vestibulum sollicitudin at eget",
      info: "Integer congue lorem in nibh porta, nec fermentum lacus tincidunt. Sed vitae eros a ligula tempor.",
    },
  ];

  return (
    <div className="news">
      <div className="news-box">
        <h2>Latest News</h2>

        <div className="news-grid">
          {list.map((item) => (
            <article key={item.id}>
              <img src={item.image} alt={item.title} />
              <nav>
                <p>
                  <FaRegUser /> {item.author}
                </p>
                <p>
                  <FaRegCalendarAlt /> {item.date}
                </p>
                <p>
                  <FaRegComments /> {item.comments}
                </p>
              </nav>
              <h3>{item.title}</h3>
              <p>{item.info}</p>
              <button>
                READ MORE <FaArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
