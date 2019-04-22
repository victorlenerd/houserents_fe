import React from 'react';
import { withRouter } from 'react-router-dom';

class header extends React.Component {
    render () {
        return (
            <>
                <header className="header">
                    <div className="header-overlay"></div>
                    <div className="container">
                        <h2>
                            Discover <br /> the right apartment to rent.
                        </h2>
                    </div>
                </header>
            </>
        );
    }
}

export default withRouter(header);