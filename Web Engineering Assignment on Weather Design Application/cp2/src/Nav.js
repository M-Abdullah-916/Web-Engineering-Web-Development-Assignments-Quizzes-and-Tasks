import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
      <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <Link to="/about">Aboutus</Link>
            </li>

        </ul>
      </nav>
    </div>
  );
}