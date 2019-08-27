import * as React from 'react';

export enum FilterActionType {
    SET_FILTER = "SET_FILTER"
}

export interface FilterAction {
    type: FilterActionType
    payload: any
}

export const FilterReducer = (state, action: FilterAction) => {
    switch (action.type) {
        case FilterActionType.SET_FILTER:
            return {
                filter: action.payload
            };
        default:
            return state;
    }
};

const getInitialState = (reducers) => Object.entries(reducers)
    .reduce((acc, [ name, reducer ]) => {
        if (typeof reducer === 'function') {
            const reducerDefaultState = reducer({}, { type: null });

            if (reducerDefaultState) {
                return { ...acc, [name]: reducerDefaultState };
            } else  {
                console.warn(`Reducer ${name} is does not have a default state`);
            }
        } else {
            console.warn(`Reducer ${name} is not valid`);
        }

        return acc;
    }, {});

export const useCombineReducers = (reducers) => {
    const [state, setState] = React.useState(getInitialState(reducers));

    const dispatch = (action) =>  {
        const newState = Object.entries(reducers).reduce((acc, [name, reducer]) => {
            if (typeof reducer === 'function') {
                return {
                    ...acc,
                    [name]: reducer(state[name], action)
                }
            }
        }, {});

        setState(newState);
    };

    return [state, dispatch];
};