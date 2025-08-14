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

export type CheckoutSettings = {
    isShipping: boolean,
    customerType: CustomerType
    debug: boolean
}

export type CheckoutContextType = {
    checkoutSettings: CheckoutSettings,
    setCheckoutSettings: React.Dispatch<React.SetStateAction<CheckoutSettings>>;
    updateCheckoutSetting: <K extends keyof CheckoutSettings>(key: K, value: CheckoutSettings[K]) => void;
    resetCheckoutSettings: () => void;
}

export type CustomerType = "private" | "company";
export type PaymentMethodType = 'direct' | 'faktura' | 'kort';
export type DeliveryMethodType = 'service-point' | 'parcel-locker' | 'home-delivery' | 'pickup-store';
