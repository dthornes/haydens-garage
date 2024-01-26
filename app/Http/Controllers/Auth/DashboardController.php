<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\UnavailableSlot;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard', [
            'bookings' => Booking::get(['name', 'email', 'phone_number', 'vehicle_make', 'vehicle_model', 'date_and_time']), 
            'unavailableSlots' => UnavailableSlot::get([
            'date_and_time'
        ])]);
    }
}
