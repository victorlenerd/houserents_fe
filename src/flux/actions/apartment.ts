export enum ApartmentAction {
    SET_APARTMENTS = "SET_APARTMENTS"
}

export interface Apartment {
    id: string
    no_bed: number
    no_bath: number
    no_toilets: number
    price: number
    url: string
    address: string
    description: string
    source: string
    date_added: string
    latlng: string
}

export interface ApartmentsPayload {
    apartments: Apartment[]
    total: number
    itemsPerPage: number
    sort: string,
    page: number,
    currentArea: {
        lat: number
        lng: number
    },
    searchText: string
}

export const SetApartments = (payload: Partial<ApartmentsPayload>) => ({
    type: ApartmentAction.SET_APARTMENTS,
    payload
});