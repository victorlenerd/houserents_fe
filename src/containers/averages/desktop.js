import React from 'react';

import Filter from '../../components/filter';
import Search from '../../components/search';
import Areas from '../../components/areas';

const DesktopView = () => (
    <div className="container hidden-xs">
        <Filter>
            {(data, FilterFields) => (
                <>
                    <FilterFields />
                    <Areas {...data} />
                    <Search {...data} />
                </>
            )}
        </Filter>
    </div>
);

export default DesktopView;