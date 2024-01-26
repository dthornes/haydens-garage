import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState } from "react";
import useSortableData from "@/Hooks/useSortableData";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Datepicker from "@/Components/Datepicker";
import InputError from "@/Components/InputError";
import { FormEventHandler } from "react";
import Table from "@/Components/Table";

export default function Dashboard({
    auth,
    bookings,
    unavailableSlots,
}: PageProps) {
    const { items, requestSort, sortConfig } = useSortableData(bookings);
    const { data, setData, post, processing, errors, reset } = useForm({
        date_and_time: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("unavailable_slots.store"));
        reset();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-5">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight p-5">
                            Unavailable Slots
                        </h2>

                        <Table
                            headers={["Date and Time"]}
                            data={unavailableSlots}
                        />

                        <form onSubmit={submit} className="m-5">
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="date_and_time"
                                    value="Date and time"
                                />

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
                                <PrimaryButton disabled={processing}>
                                    Block slot
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Table
                            headers={[
                                "Name",
                                "Email",
                                "Phone Number",
                                "Vehicle Make",
                                "Vehicle Model",
                                "Date and Time",
                            ]}
                            data={items}
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
