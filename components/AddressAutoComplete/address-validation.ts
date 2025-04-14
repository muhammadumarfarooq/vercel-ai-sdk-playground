import {z} from "zod";

export const addressValidationSchema = z
    .object({
        street: z.string().trim().min(1, 'Street is required'),
        streetOptional: z.string().trim().optional(),

        city: z.string().trim().min(1, 'City is required'),
        state: z.string().trim().min(1, 'State/Region is required'),
        zipCode: z.string().trim().min(1, "Zip Code is required"),

        country: z.string().trim().min(1, 'Country is required'),

        lat: z
            .number({invalid_type_error: 'Latitude must be a valid number'})
            .min(-90, 'Latitude must be between -90 and 90 degrees')
            .max(90, 'Latitude must be between -90 and 90 degrees'),

        lng: z
            .number({invalid_type_error: 'Longitude must be a valid number'})
            .min(-180, 'Longitude must be between -180 and 180 degrees')
            .max(180, 'Longitude must be between -180 and 180 degrees'),
    });

export type AddressValidationDTO = z.infer<typeof addressValidationSchema>;
