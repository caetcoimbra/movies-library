import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMoviePlay, BiSearchAlt } from "react-icons/bi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiMoviePlay /> Movies Library
        </Link>
      </h2>
      <form>
        <input
          type="text"
          placeholder="Busque um filme"
        />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
