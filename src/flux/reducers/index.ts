import * as React from "react";

import { FilterReducer  } from './filter';
import { ApartmentReducer } from "./apartment";

export const reducers = {
    filter: FilterReducer,
    apartment: ApartmentReducer
};

const getInitialState = (reducers) => Object.entries(reducers)
    .reduce((acc, [ name, reducer ]) => {
        if (typeof reducer === 'function') {
            const reducerDefaultState = reducer();

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