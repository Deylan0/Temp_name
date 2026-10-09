import { useState } from "react";
import { books } from "./data";
import "./App.css";

export default function Reviews({ statuses, reviews, onSave }) {
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");

  const readBooks = books.filter(
    (book) => statuses[book.id] === "przeczytane"
  );

  const save = () => {
    if (!text.trim()) return;

    onSave(selected, text);
    setSelected(null);
    setText("");
  };

  return (
    <>
      <h1>Moje recenzje</h1>
      <p className="local-info">Twoje prywatne recenzje.</p>

      {readBooks.map((book) => (
        <div className="review-book" key={book.id}>
          <img src={book.cover} alt={book.title} />

          <div className="review-info">
            <h2>{book.title}</h2>
            <p>{book.author}</p>

            {reviews[book.id] ? (
              <div className="existing-review">
                <strong>Twoja recenzja:</strong>
                <p>{reviews[book.id]}</p>
              </div>
            ) : null}

            <button
              className="review-button"
              onClick={() => {
                setSelected(book.id);
                setText(reviews[book.id] || "");
              }}
            >
              {reviews[book.id] ? "Edytuj recenzję" : "Napisz recenzję"}
            </button>
          </div>
        </div>
      ))}

      {readBooks.length === 0 && (
        <p>Oznacz książkę jako przeczytaną, aby ją zrecenzować.</p>
      )}

      {selected !== null && (
        <div className="review-modal">
          <div className="review-form">
            <h2>{books.find((book) => book.id === selected)?.title}</h2>

            <textarea
              placeholder="Napisz swoją recenzję..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />

            <div className="review-form-buttons">
              <button onClick={() => setSelected(null)}>Anuluj</button>
              <button className="save-review" onClick={save}>
                Zapisz recenzję
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
