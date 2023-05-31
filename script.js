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

//calculates height of grid box
function setRowHeight(numRows){
    let height = container.clientHeight / numRows
    let rowHeight = height + "px"
    return rowHeight
}
//calculates width of grid box
function setRowWidth(numColumns){
    let width = (container.clientWidth / numColumns)
    let rowWidth = width + "px"
    return rowWidth
}





const container = document.querySelector('.container')
let num = 64;
makeRows(num)
let rows = document.querySelectorAll('.row')
makeColumns(num, rows)
let boxes = document.querySelectorAll('.grid')



//sets width and height of grid boxes
for(let i = 0; i < num * num; i++){
    boxes[i].style.width = setRowWidth(num)
    boxes[i].style.height = setRowHeight(num)
}


//makes grid box change color
boxes.forEach((box) => {box.addEventListener('mousedown', ()=>{
    boxes.forEach((box) => {box.addEventListener('mouseover', ()=>{
        box.style.backgroundColor = "black";
    })
})
    })
})


let clearButton = document.querySelector('#clear')
//makes clear button reset grid when clicked on
clearButton.addEventListener('click', function(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "white"
    }
});


 