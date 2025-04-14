"use client"
import { useLoadScript, Autocomplete, Libraries } from '@react-google-maps/api';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import {Input} from "@/components/ui/input";
import {Address} from "@/components/AddressAutoComplete/AddressAutoComplete";

interface Props {
    onAddressSelect: (address: Address) => void;
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    hasError?: boolean;
    helperText?: string;
}

const libraries: Libraries = ['places'];

const AddressAutoCompleteInput = (
    {
        onAddressSelect,
        value,
        onChange,
        onBlur,
        hasError,
        helperText,
    }: Props) => {
    const [autocomplete, setAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        libraries,
    });

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setAutocomplete(autocomplete);
    };

    const onPlaceChanged = async () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();

            if (place.geometry?.location) {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();

                let streetNumber = '';
                let route = '';
                let city = '';
                let state = '';
                let zipCode = '';
                let country = "";

                // Extract address components
                place.address_components?.forEach((component) => {
                    const types = component.types;

                    if (types.includes('street_number')) {
                        streetNumber = component.long_name;
                    }
                    if (types.includes('route')) {
                        route = component.long_name;
                    }
                    if (types.includes('locality')) {
                        city = component.long_name;
                    }
                    if (types.includes('administrative_area_level_1')) {
                        state = component.short_name;
                    }
                    if (types.includes('postal_code')) {
                        zipCode = component.long_name;
                    }
                    if (types.includes('country')) {
                        country = component.long_name;
                    }
                });

                const street = `${streetNumber} ${route}`.trim();

                onAddressSelect({
                    street,
                    streetOptional: '',
                    city,
                    state,
                    zipCode,
                    country,
                    lat,
                    lng,
                });

                // Update the input value with the formatted address
                onChange(street);
            }
        }
    };

    if (!isLoaded)
        return (
            <Input
                type="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                placeholder="Enter your address"
                className={cn(hasError ? 'border-red-500' : 'border-gray-300')}
                disabled
            />
        );

    return (
        <div>
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            >
                <Input
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    onBlur={onBlur}
                    placeholder="Enter your address"
                    className={cn(hasError ? 'border-red-500' : 'border-gray-300')}
                />
            </Autocomplete>
            {hasError && helperText && (
                <p className="mt-1 text-sm text-red-500">{helperText}</p>
            )}
        </div>
    );
};

export default AddressAutoCompleteInput;
