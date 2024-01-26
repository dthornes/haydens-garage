export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export type BookingProps = {
    name: string;
    email: string;
    phone_number: string;
    vehicle_make: string;
    vehicle_model: string;
    date_and_time: string;
};

export type UnavailableSlotsProps = {
    date_and_time: string;
};
