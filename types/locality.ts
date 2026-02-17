export interface Country {
    id: number
    name: string
    name_en: string
}

export interface Locality {
    id: number
    name: string
    name_en: string | null
    latitude: number | null
    longitude: number | null
    elevation: string | null
    depth: number | null
    country: Country | number | null
    number: string | null
    remarks: string | null
    remarks_location: string | null
    stratigraphy_top_text: string | null
    stratigraphy_base_text: string | null
    date_changed: string | null
}

export interface LocalitiesResponse {
    count: number
    next: string | null
    previous: string | null
    results: Locality[]
}
