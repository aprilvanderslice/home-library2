import React from "react";
import { useParams } from "react-router-dom";

export default function Book() {
  let params = useParams();
  return (
    <>
      <h2>Book {params.bookId}</h2>
      <p></p>
    </>
  );
}
