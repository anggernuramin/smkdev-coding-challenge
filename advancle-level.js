// Write a program to use for loop to print the following reverse number pattern

function cetakPola(currentValue) {
  try {
    // validasi parameter currentValue harus bertipe data number
    if (!(typeof currentValue === "number")) {
      throw new Error("Uuups argumen yang anda kirim bukan angka,Coba lagi dengan memasukkan Angka!");
    }
    if (currentValue === 0) {
      // membuat base case dengan kondisi jika currentValue / nilai sekarang === 0 , maka perulangan akan berhenti
      return;
    }

    let hasil = ""; // buat variabel untuk menampung hasil dari output pola (gunakan let karena value akan berubah-ubah)

    for (let i = currentValue; i >= 1; i--) {
      // Membuat looping dengan for yang digunakan untuk mencetak angka dari currentValue hingga angka ke 1 dalam satu baris.
      hasil = hasil + i + " ";
    }

    console.log(hasil); // mencetak baris yang telah dibuat menggunakan perulangan loop diatas.

    // Fungsi Rekursif Akan memanggil fungsi nya sendiri dengan currentValue yang lebih rendah.
    cetakPola(currentValue - 1);
  } catch (error) {
    console.log("Error :", error.message); // tampilkan pesan Error sesuai dengan yg ada didalam throw new Error("")
  }
}

// Memanggil fungsi rekursif cetakPola(nilaiAwal)
cetakPola(5);
