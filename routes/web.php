<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/', fn () => Inertia::render('Home'));
Route::get('/about', fn () => Inertia::render('About'));
Route::get('/services', fn () => Inertia::render('Services'));
Route::get('/portfolio', fn () => Inertia::render('Portfolio'));
Route::get('/contact', fn () => Inertia::render('Contact'));