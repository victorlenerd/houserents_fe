import {ApartmentAction, ApartmentsPayload} from "../actions/apartment";
import {Action} from "../actions";

const initialState: ApartmentsPayload = {
    apartments: [],
    total: 0,
    sort: 'recent',
    itemsPerPage: 10,
    page: 0,
    currentArea: {
        lat: 6.5005,
        lng: 3.3666
    },
    searchText: "Yaba, Lagos, Nigeria",
};

export const ApartmentReducer = (
    state: ApartmentsPayload = initialState,
    action: Action<ApartmentAction, ApartmentsPayload>
): ApartmentsPayload => {

    if (action && action.type === ApartmentAction.SET_APARTMENTS) {
        return {
            ...state,
            ...action.payload
        };
    }

    return state;
};