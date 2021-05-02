let addBtn = document.querySelector(".add_container");
let sheetList = document.querySelector(".sheets_list");
let firstSheet = document.querySelector(".sheet");
let Allcells = document.querySelectorAll(".grid .col");
let addressbar = document.querySelector(".address-box");



firstSheet.addEventListener("click", handleActiveSheet);

addBtn.addEventListener("click",addSheet);

function addSheet(){
    console.log("Working");
    let sheetArr = document.querySelectorAll(".sheet");
    let lastSheetElem = sheetArr[sheetArr.length - 1];
    let idx = lastSheetElem.getAttribute("sheet_Idx");

    idx = Number(idx);

    let newSheet = document.createElement("div");

    newSheet.setAttribute("class","sheet");
    newSheet.setAttribute("sheet_Idx", idx + 1);
    newSheet.innerText = `Sheet ${idx + 1}`;

    sheetList.appendChild(newSheet);
    newSheet.addEventListener("click", handleActiveSheet);

}

function handleActiveSheet(e){
    let mySheet = e.currentTarget;
    let sheetsArr = document.querySelectorAll(".sheet");
    sheetsArr.forEach( function (sheet) {
        sheet.classList.remove("active_sheet");
    })
    if( !mySheet.classList[1]){
        mySheet.classList.add("active_sheet");
    }
}





for(let i = 0; i<Allcells.length; i++){
    Allcells[i].addEventListener("click", function handlecell(){
        let rid = Number(Allcells[i].getAttribute("rid"));
        let cid = Number(Allcells[i].getAttribute("cid"));
        let rowadd = rid+1;
        let coladd = String.fromCharCode(cid+65);
        let address = coladd+rowadd;
        addressbar.value = address;

        
    })
}
Allcells[0].click();
