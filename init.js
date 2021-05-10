let rows = 100;
let columns = 26;
let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let grid = document.querySelector(".grid");
for(let i = 0; i<columns; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.innerText = String.fromCharCode(i+65);
    topRow.appendChild(div);
}
for(let i = 0; i<rows; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "block");
    div.innerText = i+1;
    leftCol.appendChild(div);
}
for(let i = 0; i<rows; i++)
{
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    for(let j=0; j<columns; j++){
        let div = document.createElement("div");
        div.innerText = `${String.fromCharCode(j+65)}${i+1}`
        div.setAttribute("class", "cell");
        row.appendChild(div);
    }
    grid.appendChild(row);

}

