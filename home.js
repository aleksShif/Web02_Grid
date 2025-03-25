document.addEventListener('DOMContentLoaded', () => {
    let rows = 2;
    let cols = 2;
    const gridContainer = document.getElementById('grid');

    const addRow = () => {
        if (rows < 10) {
            for (let i = 0; i < cols; i++) {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridContainer.appendChild(gridItem);
            }
            rows++;
            renderGrid();
        }
    };

    const removeRow = () => {
        if (rows > 1) {
            for (let i = 0; i < cols; i++) {
                gridContainer.removeChild(gridContainer.lastChild);
            }
            rows--;
            renderGrid();
        }
    };

    const addColumn = () => {
        if (cols < 10) {
            const gridItems = Array.from(gridContainer.children);
            for (let i = 0; i < rows; i++) {
                const gridItem = document.createElement('div');
                gridItem.className = 'grid-item';
                gridContainer.insertBefore(gridItem, gridItems[(i+1) * cols]);
            }
            cols++;
            renderGrid();
        }
    };

    const removeColumn = () => {
        if (cols > 1) {
            const gridItems = Array.from(gridContainer.children);
            for (let i = rows - 1; i >= 0; i--) {
                gridContainer.removeChild(gridItems[(i+1) * cols - 1]);
            }
            cols--;
            renderGrid();
        }
    };

    const renderGrid = () => {
        gridContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    };
    
    const createGrid = () => {
        gridContainer.innerHTML = ''; 
        for (let i = 0; i < rows * cols; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridContainer.appendChild(gridItem);
        }    
    };

    document.getElementById('addRowButton').addEventListener('click', addRow);
    document.getElementById('removeRowButton').addEventListener('click', removeRow);
    document.getElementById('addColumnButton').addEventListener('click', addColumn);
    document.getElementById('removeColumnButton').addEventListener('click', removeColumn);

    createGrid();














});



let selected = '#d3fed8'
let secondSelected = 'pink'

/*
Sets color that will be used to color the cells, retrieves string value of color from dropdown and sets selected color to that value
*/
function setColor(){
    let color = document.querySelector('#color-dropdown').value;
    let colorInfo = document.querySelector('#currColor'); 
    // alert(color);
    switch (color){
        case "Green":
            selected = '#d3fed8';
            break;
        case "Blue":
            selected = '#d7f6ff';
            break;
        case "Orange":
            selected = '#FBCEB1';
            break;
        case "Pink":
            selected = '#ffbef7';
            break;
        case "Purple":
            selected = '#A865B5';
            break; 
    }
    colorInfo.textContent = " Current Color: " + color;
    colorInfo.style.backgroundColor = selected;

    
}


document.getElementById('setColorButton').addEventListener('click', setColor);


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
            cell.style.backgroundColor = selected
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





