const DEFAULT_SIZE = 16
const container = document.querySelector('.container')
let boxes = document.querySelectorAll('.grid')

let slider = document.querySelector('.slider')
let sliderValue = slider.getAttribute('value')
let gridValue = document.querySelector('.gridValue')

let eraser = document.querySelector('#eraser')

let clearButton = document.querySelector('#clear')

const colorPicker = document.querySelector('#colorPicker')
const colorBtn = document.querySelector('#colorBtn')

//TODO
function setUpGrid(num){
    makeRows(num)
    let rows = document.querySelectorAll('.row')
    makeColumns(num,rows)
    boxes = document.querySelectorAll('.grid');
    setBoxSizes(num)
    setBoxesBlank(num)
}

function setBoxesBlank(num){
    for(let i = 0; i < num * num; i++){
        boxes[i].style.backgroundColor = "white"
    }
}

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

//sets width and height of grid boxes
function setBoxSizes(num){
    for(let i = 0; i < num * num; i++){
        boxes[i].style.width = setRowWidth(num)
        boxes[i].style.height = setRowHeight(num)
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
//makes grid box change color
function drawInBox(color){
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function(e) {
            box.style.backgroundColor = color;
        });
      });
}

function gridResize(value) {
    let rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
      row.remove();
    });

    setUpGrid(value)
    drawInBox("black")
  }


// load in grid
window.onload = () => {
    setUpGrid(DEFAULT_SIZE)
    drawInBox("black")
}
//event listener that erases
eraser.addEventListener('click', function(){
    drawInBox("white")
});

//event listener that updates slider and value
slider.addEventListener('change', function(){
    let value = slider.value;
    gridValue.textContent = value + " x "+ value;
    slider.innerHTML = `${value} x ${value}`;
    slider.setAttribute('value', value)
})

//event listener that resets grid when clear button is hit
clearButton.addEventListener('click', function(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = "white"
    }
});

//event listner that makes new grid with a new size when slider is changed
slider.addEventListener('change', function(){
    gridResize(slider.value)
})

//color button to chose what color to draw in
colorPicker.addEventListener('input', function(){
    let color = colorPicker.value

    drawInBox(color)
})

colorBtn.addEventListener('click', function(){
    let color = colorPicker.value

    drawInBox(color)
})









//TODO
// let color = "#333333"
// //changes color of drawing
// let colorWheel = document.querySelector('#color')
// colorWheel.oninput = (e) => setColor(e.target.value)


//Steps rows then columns on load
// be able to make new row and columns on slider change may a have
//to remove the old grid before making the new one
// add event listener to be able to draw on squares
 