function removeActiveStyle(buttons) {
    buttons.forEach(button => {
        button.classList.remove('active');
    });
}

function generateGrid(divNum = 20 * 20, classname = 'grid-20x20') {
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = ''; // Kosongkan kontainer terlebih dahulu

    // Loop untuk membuat div sejumlah divNum
    for (let index = 0; index < divNum; index++) {
        const gridDiv = document.createElement('div');
        // Hapus semua class grid yang sebelumnya, lalu tambahkan class yang baru
        gridContainer.classList.remove('grid-20x20', 'grid-10x10', 'grid-30x30');
        gridContainer.classList.add(classname);
        gridContainer.appendChild(gridDiv); // Tambahkan setiap div ke dalam grid container
    }
}

function chooseGrid() {
    const colorButton = document.querySelectorAll('.color-button button');
    const gridButton = document.querySelectorAll('.grid-button button');

    gridButton.forEach(button => {
        button.addEventListener('click', () => {
            removeActiveStyle(colorButton);
            removeActiveStyle(gridButton);
            if (button.classList.contains('grid-10')) {
                gridButton[0].classList.add('active');
                generateGrid(10 * 10, 'grid-10x10');
            } else if (button.classList.contains('grid-20')) {
                gridButton[1].classList.add('active');
                generateGrid(20 * 20, 'grid-20x20');
            } else if (button.classList.contains('grid-30')) {
                gridButton[2].classList.add('active');
                generateGrid(30 * 30, 'grid-30x30');
            }
        })
    });
}

function chooseColor() {

}

// pemanggilan fungsi
generateGrid();
chooseGrid();