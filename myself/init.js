const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("node:constants");

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
let sheetArr=[];
for(let i = 0; i<rows; i++)
{
    let row = document.createElement("div");
    let rowsarr = [];
    row.setAttribute("class", "row");
    for(let j=0; j<columns; j++){
        let cell = document.createElement("div");
        
        cell.setAttribute("class", "cell");
        cell.setAttribute('rid', i);
        cell.setAttribute('cid', j);
        cell.setAttribute("contenteditable","true")
        row.appendChild(cell);
        let Obj = {
            isBold:false,
            isItalic:false,
            isUnderline:false,
            fontFamily:"sans-serif",
            fontSize:16,
            color:"black",
            bgColor:"black"


        }
        
        rowsarr.push(Obj);
    }
    sheetArr.push(rowsarr);
    grid.appendChild(row);

}
console.log(sheetArr);

