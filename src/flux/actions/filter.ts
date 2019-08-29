export enum FilterAction {
    SET_FILTER = "SET_FILTER"
}

export interface Filter {
    no_bed: number
    state: string
    max_price: number | null
    min_price: number | null
}

export const SetFilter = (payload: Filter) => ({
    type: FilterAction.SET_FILTER,
    payload
});