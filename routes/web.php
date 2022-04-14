<?php

use App\Http\Controllers\ArtikelController;
use App\Http\Controllers\PengumumanController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('list-data');
// });

// Route::get('/', [ArtikelController::class, 'index'])->name('home');
// Route::get('/buat', [ArtikelController::class, 'create'])->name('artikel.tambah-data');
// Route::get('/detail/{id}', [ArtikelController::class, 'show'])->name('artikel.detail');
// Route::post('/buat-data', [ArtikelController::class, 'store'])->name('artikel.buat-data');
// Route::get('/edit/{id}', [ArtikelController::class, 'edit'])->name('artikel.edit');
// Route::post('/update', [ArtikelController::class, 'update'])->name('artikel.update');


//home
Route::get('/', [PengumumanController::class, 'index'])->name('home');

//buat
Route::get('/buat', [PengumumanController::class, 'create'])->name('pengumuman.tambah-data');
Route::post('/buat-data', [PengumumanController::class, 'store'])->name('pengumuman.buat-data');

//edit
Route::get('/edit/{id}', [PengumumanController::class, 'edit'])->name('pengumuman.edit');
Route::post('/update/{id}', [PengumumanController::class, 'update'])->name('pengumuman.update');

//detail
Route::get('/detail/{id}', [PengumumanController::class, 'show'])->name('pengumuman.show');

//delete
Route::delete('/delete/{id}', [PengumumanController::class, 'destroy'])->name('pengumuman.destroy');
