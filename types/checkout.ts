export interface CustomerInfo {
    email: string;
    postnummer: string;
    fornamn: string;
    efternamn: string;
    co: string;
    adress: string;
    ort: string;
    mobilnummer: string;
}

export type PaymentMethodType = 'direct' | 'faktura' | 'kort';
export type DeliveryMethodType = 'service-point' | 'parcel-locker' | 'home-delivery' | 'pickup-store';
