import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Link, withRouter } from 'react-router-dom';


const header = ({ location: { pathname } }) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">Houserents</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={pathname === '/' ? 'active' : ''}>Find Apartments</Link>
                        </li>
                        <li>
                            <Link to="/roomie" className={pathname === '/roomie' ? 'active' : ''}>Roomie Network</Link>
                        </li>
                        <li>
                            <Link to="/averages" className={pathname === '/averages' ? 'active' : ''}>Average Costs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

header.propTypes = {
    location: PropTypes.object
}

export default withRouter(header);