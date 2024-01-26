import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { FormEventHandler, useEffect, useState } from "react";
import Datepicker from "@/Components/Datepicker";

type BookingFormProps = {
    status: { type: "success" | "error"; message: string } | null;
};

const BookingForm = ({ status }: BookingFormProps) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        phone_number: "",
        vehicle_make: "",
        vehicle_model: "",
        date_and_time: "",
    });

    useEffect(() => {
        if (status && status.type === "success") {
            reset();
        }
    }, [status]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("book"));
    };

    return (
        <div className="mt-5 bg-white p-5">
            <Head title="Bookings" />

            <h1 className="font-semibold text-xl text-gray-800 leading-tight mb-2">
                Bookings
            </h1>

            {status && (
                <p
                    className={`mb-2 ${
                        status.type === "success"
                            ? "text-green-500"
                            : "text-red-500"
                    }`}
                >
                    {status.message}
                </p>
            )}

            <form onSubmit={submit}>
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
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.phone_number}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="vehicle_make" value="Vehicle Make" />

                    <TextInput
                        id="vehicle_make"
                        name="vehicle_make"
                        value={data.vehicle_make}
                        className="mt-1 block w-full"
                        autoComplete="vehicle_make"
                        onChange={(e) =>
                            setData("vehicle_make", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.vehicle_make}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="vehicle_model" value="Vehicle Model" />

                    <TextInput
                        id="vehicle_model"
                        name="vehicle_model"
                        value={data.vehicle_model}
                        className="mt-1 block w-full"
                        autoComplete="vehicle_model"
                        onChange={(e) =>
                            setData("vehicle_model", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.vehicle_model}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="date_and_time" value="Date and time" />
                    <Datepicker
                        name="date_and_time"
                        selected={data.date_and_time}
                        onChange={(date) =>
                            date && setData("date_and_time", date)
                        }
                    />
                    <InputError
                        message={errors.date_and_time}
                        className="mt-2"
                    />
                </div>

                <div className="flex mt-4">
                    <PrimaryButton
                        className="w-full flex justify-center"
                        disabled={processing}
                    >
                        Book
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
