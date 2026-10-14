
export class Book {
  constructor(id, title, author, year, description, cover) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.description = description;
    this.cover = cover;
  }
}

export const books = [
  new Book(
    1,
    "Wiedźmin: Ostatnie życzenie",
    "Andrzej Sapkowski",
    1993,
    "Zbiór opowiadań o przygodach Geralta z Rivii.",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200"
  ),
  new Book(
    2,
    "Lalka",
    "Bolesław Prus",
    1890,
    "Historia Stanisława Wokulskiego i Izabeli Łęckiej.",
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200"
  ),
  new Book(
    3,
    "Hobbit",
    "J.R.R. Tolkien",
    1937,
    "Bilbo Baggins wyrusza w niezwykłą podróż.",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200"
  ),
  new Book(
    4,
    "Harry Potter i Kamień Filozoficzny",
    "J.K. Rowling",
    1997,
    "Początek przygód Harry'ego Pottera w Hogwarcie.",
    "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=200"
  ),
  new Book(
    5,
    "Zbrodnia i kara",
    "Fiodor Dostojewski",
    1866,
    "Powieść psychologiczna o winie i jej konsekwencjach.",
    "https://images.unsplash.com/photo-1511108690759-009324a90311?w=200"
  ),
];
