const waktu = document.getElementById("waktu") // Mendapatkan elemen dengan ID "waktu" dari HTML

function tanggal() { // Fungsi untuk menampilkan waktu secara real-time
    const date = new Date()  // Membuat objek Date yang merepresentasikan waktu saat ini
    waktu.innerHTML = date; // Mengubah innerHTML dari elemen dengan ID "waktu" menjadi waktu saat ini
}

setInterval(tanggal, 1000); // Memanggil fungsi tanggal() setiap 1000 milidetik (1 detik) untuk menampilkan waktu secara terus-menerus

tanggal(); // Memanggil fungsi tanggal() sekali saat halaman dimuat untuk menampilkan waktu awal

function sweetalert() { // Fungsi untuk menampilkan pop-up SweetAlert saat tombol ditekan
    Swal.fire({  // Menampilkan pop-up SweetAlert dengan pesan "Good job!" dan ikon "success" saat tombol ditekan
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
}