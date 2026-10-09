import { books } from "./data";
import "./App.css";

const categories = [
  { name: "przeczytane", color: "#42b883" },
  { name: "w trakcie", color: "#e5a83b" },
  { name: "do przeczytania", color: "#e05d5d" },
];

export default function Statuses({ statuses }) {
  return (
    <>
      <h1>Statusy książek</h1>

      <div className="status-container">
        {categories.map((category) => {
          const filtered = books.filter(
            (book) => statuses[book.id] === category.name
          );

          return (
            <div className="status-column" key={category.name}>
              <div className="status-column-title">
                <span
                  className="status-dot"
                  style={{ background: category.color }}
                />

                <h2>
                  {category.name.charAt(0).toUpperCase() +
                    category.name.slice(1)}
                </h2>

                <span className="book-count">{filtered.length}</span>
              </div>

              <div className="status-books">
                {filtered.length ? (
                  filtered.map((book) => (
                    <div className="small-book" key={book.id}>
                      <img src={book.cover} alt={book.title} />
                      <div>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="empty-status">Brak książek</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
