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

export const connect = (mapStateToProps, mapDispatchToProps = null) => (Component) => (props) => {
    const { state, dispatch } = React.useContext(Store);
    const stateToProps = typeof mapStateToProps === 'function' ? mapStateToProps(state): {};
    const dispatchToProps= typeof mapDispatchToProps === 'function' ? mapDispatchToProps(dispatch): {};

    return (<Component {...props} {...stateToProps} {...dispatchToProps} />);
};


