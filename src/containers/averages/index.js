import React from 'react';
import Filter from '../../components/filter';
import Search from '../../components/search';
import Areas from '../../components/areas';


class Averages extends React.PureComponent {
    render() {
        return (
            <section>
                <div className="container">
                    <Filter>
                        {(data, FilterFields) => (
                            <>
                                <FilterFields />
                                <Areas {...data} />
                                <Search {...data}/>
                            </>
                        )}
                    </Filter>
                </div>
            </section>
        )
    }
}

export default Averages;