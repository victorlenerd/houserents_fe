import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Discover By Areas</Link>
                </li>
                <li>
                    <Link to="/areas">Discover By Address</Link>
                </li>
            </ul>
        </nav>
        <header className="header">
            <div className="header-overlay"></div>
            <div className="container">
                <h1>
                    Discover the cost<br />
                    of renting apartments<br />
                    anywhere in Lagos.
                </h1>
            </div>
        </header>
    </>
);