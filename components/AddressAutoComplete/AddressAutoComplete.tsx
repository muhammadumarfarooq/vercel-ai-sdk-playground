"use client"
import {Label} from "@/components/ui/label";
import {Controller, useForm} from "react-hook-form";
import InputField from "@/components/InputField";
import {Button} from "@/components/ui/button";
import {LoadingButton} from "@/components/LoadingButton";
import {AddressValidationDTO, addressValidationSchema} from "@/components/AddressAutoComplete/address-validation";
import {zodResolver} from '@hookform/resolvers/zod';
import AddressAutoCompleteInput from "@/components/AddressAutoComplete/AddressAutoCompleteInput";

export interface Address {
    street: string;
    streetOptional?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    lat: number;
    lng: number;
}

export default function AddressAutoComplete({addressData}: { addressData?: Address }) {
    const methods = useForm<AddressValidationDTO>({
        resolver: zodResolver(addressValidationSchema),
        defaultValues: {
            street: addressData?.street ?? '',
            streetOptional: addressData?.streetOptional ?? '',
            zipCode: addressData?.zipCode ?? '',
            city: addressData?.city ?? '',
            state: addressData?.state ?? '',
            country: addressData?.country,
            lat: addressData?.lat ?? 0,
            lng: addressData?.lng ?? 0,
        },
    });

    const {
        setValue,
        reset,
        handleSubmit,
        register,
        control,
        formState: {errors, isDirty, isSubmitting},
    } = methods;

    const handleReset = () => {
        reset();
    };

    const onSubmit = async (addressData: AddressValidationDTO) => {
        console.log(addressData);
    };

    const handleAddressSelect = (address: Address) => {
        setValue('street', address.street);
        setValue('streetOptional', address.streetOptional ?? '');
        setValue('city', address.city);
        setValue('state', address.state);
        setValue('zipCode', address.zipCode);
        setValue('country', address.country);
        setValue('lat', address.lat);
        setValue('lng', address.lng);
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="street" className="font-medium">
                            Street
                        </Label>
                        <Controller
                            name="street"
                            control={control}
                            render={({field}) => (
                                <AddressAutoCompleteInput
                                    onAddressSelect={handleAddressSelect}
                                    value={field.value ?? ''}
                                    onChange={field.onChange}
                                    onBlur={field.onBlur}
                                    hasError={!!errors.street}
                                    helperText={errors.street?.message}
                                />
                            )}
                        />
                    </div>
                    <InputField
                        id="streetOpt"
                        placeholder="Enter Street(optional)"
                        label="Street(optional)"
                        {...register('streetOptional')}
                        hasError={!!errors.streetOptional}
                        helperText={errors.streetOptional?.message}
                    />
                    <InputField
                        id="city"
                        placeholder="Enter City"
                        label="City"
                        {...register('city')}
                        hasError={!!errors.city}
                        helperText={errors.city?.message}
                    />
                    <div className="flex gap-3">
                        <div className="flex-1">
                            <InputField
                                id="state"
                                placeholder="Enter State"
                                label="State"
                                {...register('state')}
                                hasError={!!errors.state}
                                helperText={errors.state?.message}
                            />
                        </div>
                        <div className="flex-1">
                            <InputField
                                id="zipCode"
                                placeholder="Enter Zip Code"
                                label="Zip Code"
                                {...register('zipCode')}
                                hasError={!!errors.zipCode}
                                helperText={errors.zipCode?.message}
                            />
                        </div>
                        <div className="flex-1">
                            <InputField
                                id="country"
                                placeholder="Enter Country"
                                label="Country"
                                {...register('country')}
                                hasError={!!errors.country}
                                helperText={errors.country?.message}
                            />
                        </div>


                    </div>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <InputField
                                label="Latitude"
                                id="lat"
                                type="number"
                                step="0.0000001"
                                placeholder="Enter latitude (-90 to 90)"
                                {...register('lat', {valueAsNumber: true})}
                                hasError={!!errors.lat}
                                helperText={errors.lat?.message as string}
                            />
                        </div>
                        <div className="flex-1">
                            <InputField
                                label="Longitude"
                                id="long"
                                type="number"
                                step="0.0000001"
                                placeholder="Enter longitude (-180 to 180)"
                                {...register('lng', {valueAsNumber: true})}
                                hasError={!!errors.lng}
                                helperText={errors.lng?.message as string}
                            />
                        </div>
                    </div>
                </div>
                {isDirty && (
                    <div className="mt-6 flex items-center justify-end space-x-3">
                        <Button
                            disabled={isSubmitting}
                            type="button"
                            variant="secondary"
                            onClick={handleReset}
                        >
                            Reset
                        </Button>
                        <LoadingButton loading={isSubmitting} type="submit">
                            Save
                        </LoadingButton>
                    </div>
                )}
            </form>
        </div>
    );
}
