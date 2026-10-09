
import "./App.css";

export default function BookCard({ book, status, onStatusChange }) {
  return (
    <div className="book">
      <img className="cover" src={book.cover} alt={book.title} />

      <div className="book-info">
        <h2>{book.title}</h2>
        <p className="author">{book.author}</p>
        <p className="year">{book.year}</p>
      </div>

      <div className="description">
        <p>{book.description}</p>
      </div>

      <div className="status">
        <div className="status-buttons">
          <button
            className="status-read"
            title="Przeczytane"
            aria-label="Oznacz jako przeczytane"
            onClick={() => onStatusChange(book.id, "przeczytane")}
          />

          <button
            className="status-progress"
            title="W trakcie"
            aria-label="Oznacz jako w trakcie"
            onClick={() => onStatusChange(book.id, "w trakcie")}
          />

          <button
            className="status-toread"
            title="Do przeczytania"
            aria-label="Oznacz jako do przeczytania"
            onClick={() => onStatusChange(book.id, "do przeczytania")}
          />
        </div>

        {status && <p className="current-status">{status}</p>}
      </div>
    </div>
  );
}
