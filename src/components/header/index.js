import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';


class header extends React.Component {
    render () {
        return (
            <header className="header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Find Apartments</Link>
                        </li>
                        <li>
                            <Link to="/">How It Works</Link>
                        </li>
                        <li>
                            <Link to="/">Average Costs</Link>
                        </li>
                        <li>
                            <Link to="/">Roomie Network</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default header;