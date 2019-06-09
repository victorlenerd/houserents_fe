import React from 'react';
import { hot } from "react-hot-loader";

import DesktopView from './desktop';
import MobileView from './mobile';

const Averages = () => (
    <section>
        <DesktopView />
        <MobileView />
    </section>
);

export default hot(module)(Averages);