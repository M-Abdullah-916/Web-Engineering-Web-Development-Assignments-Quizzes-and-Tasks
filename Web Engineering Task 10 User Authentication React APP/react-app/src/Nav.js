import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <h1>Navigation Bar</h1>
            <Link to="/">
                    <button>Home</button>
            </Link>
            <Link to="/about">
                    <button>About Us</button>
            </Link>
            <Link to="/contact">
                    <button>Contact Us</button>
            </Link>
        </div>
    )
}

export default Nav;

