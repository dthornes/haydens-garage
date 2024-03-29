<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
use App\Models\Booking;
use App\Models\UnavailableSlot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index() {
        return Inertia::render('Booking', [
            'canLogin' => Route::has('login'),
            'status' => session('status'),
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|unique:bookings,email|email',
            'phone_number' => 'required|numeric',
            'vehicle_make' => 'required',
            'vehicle_model' => 'required',
            'date_and_time' => 'required|unique:bookings,date_and_time'
        ]);

        $unavailableSlot = UnavailableSlot::where('date_and_time', $request->date_and_time)->first();

        if($unavailableSlot) {
            $request->session()->put('status', ['type' => 'error', 'message' => 'Date unavailable, please try another!']);

            return back();
        }

        $booking = Booking::create($request->all());

        Mail::to(['paul@haydensgarage.com', $booking->email])->send(new BookingConfirmation($booking));

        $request->session()->put('status', ['type' => 'success', 'message' => 'Booking created successfully!']);

        return back();
    }
}
