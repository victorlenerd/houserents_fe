import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class header extends React.Component {
    render () {
        return (
            <header className="header">
                <div className="container">
                    <div className="logo">Houserents</div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Find Apartments</Link>
                            </li>
                            <li>
                                <Link to="/">How It Works</Link>
                            </li>
                            <li>
                                <Link to="/">Roomie Network</Link>
                            </li>
                            <li>
                                <Link to="/averages">Average Costs</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default header;