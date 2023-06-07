let darkBtn = document.querySelector(".darkMode")
let headerItems = document.querySelectorAll(".headItem")

darkBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme")
})

headerItems.forEach(getSideItemBtns => {
    getSideItemBtns.addEventListener("click",(e)=>{
        headerItems.forEach(getBtns=>{
            getBtns.classList.remove("activeBtn")
        })
        e.target.classList.add("activeBtn")
    })
});