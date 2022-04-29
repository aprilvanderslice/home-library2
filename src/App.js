import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <h1>My Books</h1>
      <nav>
        <Link to="/mybooks">My Books</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}
