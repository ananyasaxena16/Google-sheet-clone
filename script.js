let iconContainer=document.querySelector(".icon-container");
let sheetList = document.querySelector(".sheet-list")
let sheet = document.querySelector(".sheet");
sheet.addEventListener("click", handleClick);

iconContainer.addEventListener("click", function(){
    let newSheet = document.createElement("div");
    let allSheets = document.querySelectorAll(".sheet")
    let lastSheet = allSheets[allSheets.length-1];
    let idx = lastSheet.getAttribute("id");
    newSheet.setAttribute("id", Number(idx)+1);
    newSheet.innerText=`sheet-${Number(idx)+2}`;
    newSheet.setAttribute("class", "sheet");
    sheetList.appendChild(newSheet);

    allSheets = document.querySelectorAll(".sheet")
    for(let i =0 ; i<allSheets.length; i++)
    {
        allSheets[i].classList.remove("active");
    }
    allSheets[allSheets.length-1].classList.add("active");
    newSheet.addEventListener("click", handleClick);


    
})

function handleClick(e){
    let sheet = e.currentTarget;
    let allSheets = document.querySelectorAll(".sheet")
    for(let i =0 ; i<allSheets.length; i++)
    {
        allSheets[i].classList.remove("active");
    }
    sheet.classList.add("active");
    

}