import React from 'react';

import Filter from '../../components/filter';
import Search from '../../components/search';
import Areas from '../../components/areas';
import MobileTab from '../../components/tab';

class MobileView extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            data: {}
        };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(data) {
        this.setState({ data })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="hidden-lg hidden-md hidden-sm">
                <Filter onUpdate={this.handleUpdate}>
                    {(_, FilterFields) => (
                        <MobileTab>
                            <div className="container">
                                <Areas {...data} />
                            </div>
                            <div className="container">
                                <Search {...data} />
                            </div>
                            <div className="container">
                                <FilterFields />
                            </div>
                        </MobileTab>
                    )}
                </Filter>
            </div>
        )
    }
}

export default MobileView;