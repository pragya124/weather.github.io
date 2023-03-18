import React from "react";
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
    return (
<>
    <header className={classes.headerlist}>
            <a href = "#">Logo</a>
            <nav>
                <ul className={classes.linklistitem}>
                    <li>
                    <Link to="/">Header</Link>
                    </li>
                    <li>
                    <Link to="/search">Search</Link>
                    </li>
                    <li>
                    <Link to="/weather">Weather</Link>
                    </li>
                </ul>
            </nav>
    </header>
</>
  );
};

export default Nav;