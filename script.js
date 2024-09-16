// Fungsi untuk menghapus kelas 'active' dari tombol yang dipilih
function removeActiveStyle(buttons) {
    buttons.forEach(button => button.classList.remove('active'));
}

// Fungsi untuk menghasilkan grid sesuai dengan jumlah dan class grid yang dipilih
function generateGrid(divNum = 20 * 20, classname = 'grid-20x20') {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Kosongkan kontainer sebelum menambahkan grid baru
    gridContainer.className = `grid-container ${classname}`; // Ganti class untuk grid sesuai pilihan

    // Buat div sejumlah divNum dan tambahkan ke dalam grid container
    for (let index = 0; index < divNum; index++) {
        const gridDiv = document.createElement('div');
        gridContainer.appendChild(gridDiv); // Tambahkan div ke dalam grid
    }
}

// Fungsi untuk memilih ukuran grid berdasarkan klik tombol
function chooseGrid() {
    const gridButtons = document.querySelectorAll('.circle');

    gridButtons.forEach(button => {
        button.addEventListener('click', () => {
            removeActiveStyle(gridButtons); // Hapus class 'active' dari semua tombol grid
            button.classList.add('active'); // Tambahkan class 'active' ke tombol yang dipilih

            if (button.classList.contains('grid-10')) {
                generateGrid(10 * 10, 'grid-10x10'); // Buat grid 10x10
            } else if (button.classList.contains('grid-20')) {
                generateGrid(20 * 20, 'grid-20x20'); // Buat grid 20x20
            } else if (button.classList.contains('grid-30')) {
                generateGrid(30 * 30, 'grid-30x30'); // Buat grid 30x30
            }
        });
    });
}

// Fungsi untuk memilih warna berdasarkan klik tombol
function chooseColor() {
    const colorButtons = document.querySelectorAll('.rectangle');

    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            removeActiveStyle(colorButtons); // Hapus class 'active' dari semua tombol warna
            button.classList.add('active'); // Tambahkan class 'active' ke tombol yang dipilih

            if (button.classList.contains('kobo')) {
                generateColor([
                    "#87CEFA", "#1E90FF", "#00FFFF", "#FFFAFA", "#AEC6CF", "#E6E6FA", "#00FFFF"
                ]);
            } else if (button.classList.contains('rainbow')) {
                generateColor([
                    "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#8B00FF"
                ]);
            } else if (button.classList.contains('black')) {
                generateColor('#000000');
            } else if (button.classList.contains('white')) {
                generateColor('#FFFFFF');
            }
        });
    });
}

// Fungsi untuk menghasilkan warna pada setiap grid berdasarkan pilihan warna
function generateColor(colors) {
    const gridItems = document.querySelectorAll('.grid-container > div');

    gridItems.forEach((item) => {
        if (Array.isArray(colors)) {
            // Jika warna adalah array (Kobo atau Rainbow), pilih warna acak dari array
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = randomColor; // Warnai grid saat dihover
            });
        } else {
            // Jika warna adalah warna solid (hitam atau putih)
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = colors; // Warnai grid dengan warna solid saat dihover
            });
        }
    });
}
// Fungsi untuk mereset warna pada grid ke warna default (misalnya putih atau aliceblue)
function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-container > div');

    gridItems.forEach(item => {
        item.style.backgroundColor = 'aliceblue'; // Reset ke warna default grid
    });
}

// Fungsi untuk menambahkan event listener ke tombol reset
function addResetButtonListener() {
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', resetGrid); // Reset grid ketika tombol reset diklik
}

function playMusic() {
    const musicButton = document.getElementById("musicButton");
    const backgroundMusic = document.getElementById("backgroundMusic");

    // Fungsi untuk mengaktifkan/mematikan musik
    function toggleMusic() {
        musicButton.classList.toggle("music-off");
        if (musicButton.classList.contains("music-off")) {
            musicButton.textContent = "🔇 Music Off";
            backgroundMusic.pause();
            musicButton.style.backgroundColor = "red"; // Ubah warna tombol saat off
        } else {
            musicButton.textContent = "🎵 Music";
            backgroundMusic.play();
            musicButton.style.backgroundColor = "transparent"; // Ubah warna tombol saat on
        }
    }

    musicButton.addEventListener("click", toggleMusic);

    // Otomatis memutar musik dan tangani jika ada error terkait autoplay
    backgroundMusic.play().then(() => {
        musicButton.textContent = "🎵 Music";
    }).catch((error) => {
        console.log("Autoplay was prevented: ", error);
    });
}

// Modifikasi fungsi main untuk memasukkan fungsi reset
function main() {
    generateGrid(); // Generate grid default 20x20
    chooseGrid(); // Pilih ukuran grid
    chooseColor(); // Pilih warna untuk grid
    addResetButtonListener(); // Tambahkan event listener ke tombol reset
    playMusic(); // untuk memulai music
}

// Jalankan program setelah halaman dimuat
document.addEventListener('DOMContentLoaded', main);
