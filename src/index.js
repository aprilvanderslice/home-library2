import React from "react";
import { createRoot } from 'react-dom/client'
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import MyBooks from "./routes/mybooks";
import Search from "./routes/search";
import Book from './routes/book';

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <GlobalProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="mybooks" element={<MyBooks />}>
            <Route index element={<main>
              <p>Select an invoice</p>
            </main>} />
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route path="search" element={<Search />} />
          <Route 
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </GlobalProvider>
);
