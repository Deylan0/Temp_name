
import { Book } from "./data";

const API_URL = "https://openlibrary.org/search.json";

export async function searchBooks(query) {
  if (!query.trim()) return [];

  const params = new URLSearchParams({
    q: query,
    fields:
      "key,title,author_name,first_publish_year,cover_i,first_sentence",
    limit: "20",
  });

  const response = await fetch(`${API_URL}?${params}`);

  if (!response.ok) {
    throw new Error("Błąd pobierania książek");
  }

  const data = await response.json();

  return data.docs.map(
    (item) =>
      new Book(
        item.key,
        item.title ?? "Brak tytułu",
        item.author_name?.join(", ") ?? "Nieznany autor",
        item.first_publish_year ?? null,
        item.first_sentence?.[0] ?? "",
        item.cover_i
          ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
          : null
      )
  );
}