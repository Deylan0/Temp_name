import { useState } from "react";
import { useNavigate } from "react-router";
import { books } from "./data";
import BookCard from "./BookCard";
import Statuses from "./Statuses";
import Reviews from "./Reviews";
import "./App.css";

export default function Home() {
  const navigate = useNavigate();

  const [view, setView] = useState("home");
  const [search, setSearch] = useState("");

  const [statuses, setStatuses] = useState({
    1: "przeczytane",
    2: "w trakcie",
    3: "do przeczytania",
  });

  const [reviews, setReviews] = useState({
    1: "Świetna książka, bardzo dobrze się ją czytało.",
  });

  const changeStatus = (id, status) => {
    setStatuses((prev) => ({ ...prev, [id]: status }));
  };

  const saveReview = (id, text) => {
    setReviews((prev) => ({ ...prev, [id]: text }));
  };

  const normalize = (text) =>
    text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const results = search.trim()
    ? books.filter((book) =>
        normalize(`${book.title} ${book.author} ${book.year}`).includes(
          normalize(search.trim())
        )
      )
    : [];

  const goHome = () => {
    setView("home");
    setSearch("");
  };

  return (
    <div className="app">
      <header>
        <button className="logo" onClick={goHome}>
          Książkarnia📓
        </button>

        <input
          placeholder="Szukaj książki, autora lub roku..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setView("home");
          }}
        />

        <nav className="header-buttons">
          <button onClick={() => setView("statuses")}>
            Statusy
          </button>

          <button onClick={() => setView("reviews")}>
            Recenzje
          </button>

          <button onClick={() => navigate("/Log-In")}>
            Wyloguj
          </button>
        </nav>
      </header>

      <main>
        {view === "home" && (
          <>
            <h1>{search ? "Wyniki wyszukiwania" : "Wyszukaj książkę"}</h1>

            {!search.trim() ? (
              <div className="search-info">
                <h2>Znajdź swoją książkę</h2>
                <p>Wpisz tytuł, autora lub rok wydania.</p>
              </div>
            ) : results.length > 0 ? (
              <div className="book-list">
                {results.map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    status={statuses[book.id]}
                    onStatusChange={changeStatus}
                  />
                ))}
              </div>
            ) : (
              <p>Nie znaleziono książek.</p>
            )}
          </>
        )}

        {view === "statuses" && (
          <Statuses statuses={statuses} />
        )}

        {view === "reviews" && (
          <Reviews
            statuses={statuses}
            reviews={reviews}
            onSave={saveReview}
          />
        )}
      </main>
    </div>
  );
}
