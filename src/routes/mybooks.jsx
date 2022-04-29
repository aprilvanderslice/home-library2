import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export default function MyBooks() {
  const { savedBooks } = useContext(GlobalContext);
  return savedBooks.length === 0 ? (
    <h3>Search for books to add to your library</h3>
  ) : (
    <main>
      <nav>
        {savedBooks.map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "black",
              };
            }}
            to={`/mybooks/${book.id}`}
            key={book.id}
          >
            {book.title}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}
