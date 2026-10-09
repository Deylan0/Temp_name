Ogolnie to na razie zrobilem trzy strony w src/routes. jak chcecie dodac nowa to dodajecie w tym folderze plik.jsx i w main.jsx robicie tak samo jak z reszta stron.

DO nawigacji sa 2 funkcje programistyczna i componentowa.

jak chcecie guzik zrobic co zmienia strone to robicie takie cos

import { Link } from "react-router";
<Link to="/login">Guzik</Link>


jak chcecie zrobic skrypt albo w js zmienic strone bo cos to robicie

import { useNavigate } from "react-router";
navigate("/dashboard");