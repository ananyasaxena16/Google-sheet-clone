let addbtnContainer = document.querySelector(".add-sheet_container");
let sheetList = document.querySelector(".sheets-list");
let firstSheet = document.querySelector(".sheet");
let Allcells = document.querySelectorAll(".grid .col");
let addressBar = document.querySelector(".address-box");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let centerBtn = document.querySelector(".center");
let fontBtn = document.querySelector(".font-size");
let fontFamily = document.querySelector(".font-family");
let boldElem = document.querySelector(".bold");
let italicElem = document.querySelector(".italic");
let underlineElem = document.querySelector(".underline");
firstSheet.addEventListener("click", handleActiveSheet)

// create sheets and add functionlities

addbtnContainer.addEventListener("click", function () {
    let sheetsArr = document.querySelectorAll(".sheet");
    let lastSheetElem = sheetsArr[sheetsArr.length - 1];
    let idx = lastSheetElem.getAttribute("sheetIdx");
    idx = Number(idx);
    let NewSheet = document.createElement("div");
    NewSheet.setAttribute("class", "sheet");
    NewSheet.setAttribute("sheetIdx", idx + 1);
    NewSheet.innerText = `Sheet ${idx + 1}`;
    // page add
    sheetList.appendChild(NewSheet);
    NewSheet.addEventListener("click", handleActiveSheet)
})
function handleActiveSheet(e) {
    let MySheet = e.currentTarget;
    let sheetsArr = document.querySelectorAll(".sheet");
    sheetsArr.forEach(function (sheet) {
        sheet.classList.remove("active-sheet");
    })
    if (!MySheet.classList[1]) {
        MySheet.classList.add("active-sheet");
    }
}
// *****************************************************
//  address set on click of a cell 
for (let i = 0; i < Allcells.length; i++) {
    Allcells[i].addEventListener("click", function handleCell() {
        let rid = Number(Allcells[i].getAttribute("rid"));
        let cid = Number(Allcells[i].getAttribute("cid"));
        let rowAdd = rid + 1;
        let colAdd = String.fromCharCode(cid + 65);
        let address = colAdd + rowAdd;
        addressBar.value = address;
        // styling-> set 
    });
}
// initial cell click emulate
Allcells[0].click();
// ************Formatting****************

leftBtn.addEventListener("click", function () {
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    console.log(rid, cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "left"
})
rightBtn.addEventListener("click", function () {
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    console.log(rid, cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "right"
})
centerBtn.addEventListener("click", function () {
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    console.log(rid, cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    cell.style.textAlign = "center"
})
fontBtn.addEventListener("change", function () {
    let fontSize = fontBtn.value;
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    console.log(rid, cid);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    console.log(fontSize);
    cell.style.fontSize = fontSize + "px";
})
fontFamily.addEventListener("change", function () {
    // alert(fontFamily.value);
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    let cFont = fontFamily.value
    cell.style.fontFamily = cFont;
})

boldElem.addEventListener("click", function () {
    let isActive = boldElem.classList.contains("active-btn");
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if (isActive == false) {
        // cell text bold
        cell.style.fontWeight = "bold";
        boldElem.classList.add("active-btn");
    } else {
        // cell text normal
        cell.style.fontWeight = "normal";
        boldElem.classList.remove("active-btn");
    }
})
italicElem.addEventListener("click", function () {
    let isActive = italicElem.classList.contains("active-btn");
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if (isActive == false) {
        // cell text bold
        cell.style.fontStyle = "italic";
        italicElem.classList.add("active-btn");
    } else {
        // cell text normal
        cell.style.fontStyle = "normal";
        italicElem.classList.remove("active-btn");
    }
})
underlineElem.addEventListener("click", function () {
    let isActive = underlineElem.classList.contains("active-btn");
    let address = addressBar.value;
    let { rid, cid } = getRIdCIdfromAddress(address);
    let cell = document.querySelector(`.col[rid="${rid}"][cid="${cid}"]`);
    if (isActive == false) {
        // cell text bold
        cell.style.textDecoration = "underline";
        underlineElem.classList.add("active-btn");
    } else {
        // cell text normal
        cell.style.textDecoration = "none";
        underlineElem.classList.remove("active-btn");
    }
})
// ****************************************************************




// Helper function
function getRIdCIdfromAddress(adress) {
    // A1
    let cellColAdr = adress.charCodeAt(0);
    // console.log(cellColAdr);
    let cellrowAdr = adress.slice(1);
    let cid = cellColAdr - 65;
    let rid = Number(cellrowAdr) - 1;
    return { cid, rid };

}
