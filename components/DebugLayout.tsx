"use client";

import React, { useCallback, useEffect } from 'react'
import { useCheckout } from '@/context/CheckoutSettings';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { CustomerType } from "@/types/checkout"
import { Label } from './ui/label';
import { Button } from './ui/button';

function DebugLayout({ children }: { children: React.ReactNode }) {
    const {
        checkoutSettings,
        updateCheckoutSetting,
        resetCheckoutSettings
    } = useCheckout();

    const hideHeader = !checkoutSettings.debug || false;

    const updateHeaderDebugSetting = useCallback(() => {
        updateCheckoutSetting("debug", !checkoutSettings.debug);
    }, [checkoutSettings.debug, updateCheckoutSetting])

    const updateCustomerType = (val: CustomerType) => {
        if (val != checkoutSettings.customerType) updateCheckoutSetting("customerType", val);
    }

    const updateShipping = (val: string) => {
        const boolVal = (val === "true");
        if (boolVal != checkoutSettings.isShipping) updateCheckoutSetting("isShipping", boolVal);
    }

    const ReturnView = () => {
        return (
            <>
                {!hideHeader ? (
                    <>
                        <div className="w-full flex flex-row bg-white shadow-xs border-b border-neutral-200 items-center px-4 fixed top-0 gap-4 py-2  overflow-x-auto whitespace-nowrap">
                            <div>
                                Debug menu:
                            </div>
                            <div className="flex flex-row items-center justify-center gap-6">
                                <div className="cursor-pointer text-sky-800 hover:underline" onClick={updateHeaderDebugSetting}>
                                    Hide header
                                </div>
                                <div className='inline-flex gap-2'>
                                    <Label htmlFor="customerType">Customer type: </Label>
                                    <Select name='customerType' value={checkoutSettings.customerType} onValueChange={updateCustomerType}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="customerType" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="private">Private</SelectItem>
                                            <SelectItem value="company">Company</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='inline-flex gap-2'>
                                    <Label htmlFor="isShipping">is Shipping: </Label>
                                    <Select name='isShipping' value={checkoutSettings.isShipping ? 'true' : 'false'} onValueChange={updateShipping}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="customerType" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="true">true</SelectItem>
                                            <SelectItem value="false">false</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='inline-flex gap-2'>
                                    <Button variant={'outline'} onClick={resetCheckoutSettings}>
                                        Restore settings
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            {children}
                        </div>
                    </>
                ) :
                    children
                }
            </>
        )
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.altKey && e.key.toLowerCase() === 'a') {
                updateHeaderDebugSetting();
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, [checkoutSettings, updateHeaderDebugSetting])


    return (
        <ReturnView />
    )
}

export default DebugLayout