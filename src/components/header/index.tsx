import React from 'react';
import './index.css';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';


const header = ({ location: { pathname } }: RouteComponentProps) => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    HouseRent
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={pathname === '/' ? 'active' : ''}>Apartments</Link>
                        </li>
                        <li>
                            <Link to="/roommates" className={pathname === '/roommates' ? 'active' : ''}>Room Mates</Link>
                        </li>
                        <li>
                            <Link to="/averages" className={pathname === '/averages' ? 'active' : ''}>Average Costs</Link>
                        </li>
                        <li>
                            <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default withRouter(header);