import GuestLayout from "@/Layouts/GuestLayout";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

const BookingForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        vehicle_make: "",
        vehicle_model: "",
    });

    return (
        <GuestLayout>
            <Head title="Bookings" />

            <div>
                <InputLabel htmlFor="name" value="Name" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    onChange={(e) => setData("email", e.target.value)}
                    required
                />

                <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="phone_number" value="Phone Number" />

                <TextInput
                    id="phone_number"
                    type="tel"
                    name="phone_number"
                    value={data.phone_number}
                    className="mt-1 block w-full"
                    autoComplete="phone_number"
                    onChange={(e) => setData("phone_number", e.target.value)}
                    required
                />

                <InputError message={errors.phone_number} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="vehicle_make" value="Vehicle Make" />

                <TextInput
                    id="vehicle_make"
                    name="vehicle_make"
                    value={data.vehicle_make}
                    className="mt-1 block w-full"
                    autoComplete="vehicle_make"
                    onChange={(e) => setData("vehicle_make", e.target.value)}
                    required
                />

                <InputError message={errors.vehicle_make} className="mt-2" />
            </div>

            <div className="mt-4">
                <InputLabel htmlFor="vehicle_model" value="Vehicle Model" />

                <TextInput
                    id="vehicle_model"
                    name="vehicle_model"
                    value={data.vehicle_model}
                    className="mt-1 block w-full"
                    autoComplete="vehicle_model"
                    onChange={(e) => setData("vehicle_model", e.target.value)}
                    required
                />

                <InputError message={errors.vehicle_model} className="mt-2" />
            </div>

            <div className="flex mt-4">
                <PrimaryButton
                    className="w-full flex justify-center"
                    disabled={processing}
                >
                    Book
                </PrimaryButton>
            </div>
        </GuestLayout>
    );
};

export default BookingForm;
