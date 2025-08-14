"use client"

import React, { createContext, useContext, useState } from "react"
import type { CheckoutSettings, CheckoutContextType } from "@/types/checkout"

const initialSettings: CheckoutSettings = {
    isShipping: true,
    customerType: "company",
    debug: true
}

const CheckoutContext = createContext<CheckoutContextType | undefined>(undefined)

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [checkoutSettings, setCheckoutSettings] = useState<CheckoutSettings>(initialSettings)

    const updateCheckoutSetting = <K extends keyof CheckoutSettings>(
        key: K,
        value: CheckoutSettings[K]
    ) => {
        setCheckoutSettings((prev) => (
            {
                ...prev,
                [key]: value,
            }
        ))
    }

    const resetCheckoutSettings = () => {
        setCheckoutSettings(initialSettings);
    }

    return (
        <CheckoutContext.Provider value={{
            checkoutSettings,
            setCheckoutSettings,
            updateCheckoutSetting,
            resetCheckoutSettings
        }}>
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = () => {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error("useCheckout muste be used within a CheckoutProvider");
    }
    return context;
}