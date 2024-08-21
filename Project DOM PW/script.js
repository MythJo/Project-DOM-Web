document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('lihatDetailjojoButton');
    const description = document.getElementById('jojo_description');

    button.addEventListener('click', function() {
        if (description.style.display === 'none') {
            description.style.display = 'table';  // Menampilkan tabel
        } else {
            description.style.display = 'none';   // Menyembunyikan tabel
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('lihatDetailpanjiButton');
    const description = document.getElementById('panji_description');

    button.addEventListener('click', function() {
        if (description.style.display === 'none') {
            description.style.display = 'table';  // Menampilkan tabel
        } else {
            description.style.display = 'none';   // Menyembunyikan tabel
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('lihatDetailranggaButton');
    const description = document.getElementById('Rangga_description');

    button.addEventListener('click', function() {
        if (description.style.display === 'none') {
            description.style.display = 'table';  // Menampilkan tabel
        } else {
            description.style.display = 'none';   // Menyembunyikan tabel
        }
    });
});