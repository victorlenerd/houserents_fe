import React from 'react';
import './index.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';


const header = ({ location: { pathname } }: RouteComponentProps) => {
    return (
        <header className="header">
            <>
                <Link to="/" className="logo">
                    HouseRent
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={pathname === '/' ? 'active' : ''}>Apartments</Link>
                        </li>
                        <li>
                            <Link to="/roommates" className={pathname === '/roommates' ? 'active' : ''}>Roommates</Link>
                        </li>
                    </ul>
                </nav>
            </>
        </header>
    );
};

export default withRouter(header);