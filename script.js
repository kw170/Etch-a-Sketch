function makeRows(numRows){
    for(let i = 0; i < numRows;i++){
        let row = document.createElement('div')
        container.appendChild(row)
        row.classList.add('row')
    }
}

function makeColumns(numColumns,rows){
    for(let i = 0; i < numColumns; i++){
        for(let j = 0; j < numColumns; j++){
            let column = document.createElement('div')
            rows[i].appendChild(column)
            column.classList.add('grid')
        }
    }
}

function setRowHeight(numRows){
    let height = container.clientHeight / numRows - (numRows * 2)
    let rowHeight = height + "px"
    return rowHeight
}

function setRowWidth(numColumns){
    let width = (container.clientWidth / numColumns) - (numColumns * 2)
    let rowWidth = width + "px"
    return rowWidth
}





const container = document.querySelector('.container')
let num = 3;
makeRows(num)
let rows = document.querySelectorAll('.row')
makeColumns(num, rows)
let boxes = document.querySelectorAll('.grid')
console.log(container)
for(let i = 0; i < num * num; i++){
    boxes[i].style.width = setRowWidth(num)
    boxes[i].style.height = setRowHeight(num)
    boxes[i].style.flex="1 1 0"
    // boxes[i].style.width = "100px";
    // boxes[i].style.height = "100px";
}
