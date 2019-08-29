import * as React from 'react';
export const Store = React.createContext(null);

export interface IWithStore {
    state: any;
    dispatch: (action) => void;
}

export const withStore = (Component) => (props) => {
    const Context = React.useContext(Store);
    return (<Component {...props} {...Context} />);
};

export function shallowCompare<T>(obj: T, obj2: T): boolean {
    if (Array.isArray(obj) || Array.isArray(obj2)) throw new Error("Cannot compare arrays");

    const arr = Object
        .entries(obj)
        .map(([key, value]) => {
            if (typeof value !== 'object' && !Array.isArray(value)) {
                return (obj2[key] === value);
            }

            return true;
        });

    return arr.some((item) => !item);
}

export const connect = (mapStateToProps, mapDispatchToProps = null) => (Component) => (props) => {
    const { state, dispatch } = React.useContext(Store);
    const stateToProps = typeof mapStateToProps === 'function' ? mapStateToProps(state): {};
    const dispatchToProps= typeof mapDispatchToProps === 'function' ? mapDispatchToProps(dispatch): {};

    return (<Component {...props} {...stateToProps} {...dispatchToProps} />);
};
