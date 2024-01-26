<?php

namespace App\Http\Controllers;

use App\Models\UnavailableSlot;
use Illuminate\Http\Request;

class UnavailableSlotController extends Controller
{
    public function store(Request $request) {
        UnavailableSlot::create($request->all());

        return back()->with('success', 'Booking slot now unavailable!');
    }
}
