import React from 'react';
import house from '../assets/svg/house2.svg';
import { Link, withRouter } from 'react-router-dom';

class header extends React.Component {
    render () {
        const { location: { pathname } } = this.props;

        return (
            <>
                <nav>
                    <ul>
                        <li>
                            <Link className={(pathname === '/') ? 'active' : ''} to="/">Areas</Link>
                        </li>
                        <img src={house} width={22} height={22} />
                        <li>
                            <Link className={(pathname === '/areas') ? 'active' : ''} to="/areas">Search</Link>
                        </li>
                    </ul>
                </nav>
                <header className="header">
                    <div className="header-overlay"></div>
                    <div className="container">
                        {(pathname === '/') ? <h1>
                            Discover Available <br /> Apartments In Major Areas.
                        </h1> : 
                        <h1>
                            Search For Near By  <br /> Available  Apartments.
                        </h1>}
                    </div>
                </header>
            </>
        );
    }
};

export default withRouter(header);