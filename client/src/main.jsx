import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Home from "./routes/home.jsx";
import LogIn from "./routes/Login.jsx";
import Reviews from "./routes/Reviews.jsx";
import SignUp from "./routes/SignUp.jsx";
import Statuses from "./routes/Statuses.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Log-In" element={<LogIn />} />
      <Route path="Reviews" element={<Reviews />} />
      <Route path="SignUp" element={<SignUp />} />
      <Route path="Statuses" element={<Statuses />} />
    </Routes>
  </BrowserRouter>,
);
