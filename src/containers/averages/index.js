import React from 'react';
import Filter from '../../components/filter';
import Search from '../../components/search';
import Areas from '../../components/areas';

const Averages = () => (
    <section>
        <div className="container">
            <Filter />
            <Areas />
            <Search />
        </div>
    </section>
);

export default Averages;