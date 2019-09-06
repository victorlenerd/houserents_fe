import {FilterAction, Filter} from "../actions/filter";
import {Action} from "../actions";

const initialState = {
    no_bed: 1,
    state: "Lagos",
    max_price: 0,
    min_price: 0
};

export const FilterReducer = (state = initialState, action: Action<FilterAction, Filter>): Filter => {
    if (action && action.type === FilterAction.SET_FILTER) {
        return {
            ...state,
            ...action.payload
        };
    }

    return state;
};