<?php

use App\Http\Controllers\Auth\DashboardController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UnavailableSlotController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BookingController::class, 'index'])->name('booking');
Route::post('/store', [BookingController::class, 'store'])->name('booking.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::post('/unavailable_slots', [UnavailableSlotController::class, 'store'])->name('unavailable_slots.store');
    Route::delete('/unavailable_slots', [UnavailableSlotController::class, 'destroy'])->name('unavailable_slots.destroy');
});

Route::post('book', [BookingController::class, 'store'])->name('book');

require __DIR__.'/auth.php';
