document.addEventListener('DOMContentLoaded', () => {
    let rows = 2;
    let cols = 2;

    const addRow = () => {
        if (rows < 10) {
            rows++;
            renderGrid();
        }
    };

    const removeRow = () => {
        if (rows > 1) {
            rows--;
            renderGrid();
        }
    };

    const addColumn = () => {
        if (cols < 10) {
            cols++;
            renderGrid();
        }
    };

    const removeColumn = () => {
        if (cols > 1) {
            cols--;
            renderGrid();
        }
    };

    const createGrid = () => {
        const gridContainer = document.getElementById('grid');
        gridContainer.innerHTML = '';
        for (let i = 0; i < rows * cols; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridContainer.appendChild(gridItem);
        }
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    };

    const renderGrid = () => {
        createGrid();
    };

    document.getElementById('addRowButton').addEventListener('click', addRow);
    document.getElementById('removeRowButton').addEventListener('click', removeRow);
    document.getElementById('addColumnButton').addEventListener('click', addColumn);
    document.getElementById('removeColumnButton').addEventListener('click', removeColumn);

    renderGrid();
});



let selected = 'lightblue'
let secondSelected = 'pink'



grid.addEventListener('click', function() {
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach( cell => {
        cell.addEventListener('click', function() {
                cell.style.backgroundColor = selected
        })
    })
});

function color_All_uncolored_Cells() {
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(cell => {
        if (cell.style.backgroundColor === 'lightgray' || cell.style.backgroundColor === '') { 
            cell.style.backgroundColor = secondSelected
        }
    });
}

function color_All_color_selected_Cells() {
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(cell => {
            cell.style.backgroundColor = selected
    });
}


function clear_all() {
    let gridItems = document.querySelectorAll(".grid-item");
    gridItems.forEach(cell => {
            cell.style.backgroundColor = 'lightgray'
    });
}





