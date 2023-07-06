let darkBtn = document.querySelector(".darkModeBtn")
let headerItems = document.querySelectorAll(".headItem")
let pubBtn = document.querySelector(".pubBtn")
let emptyImg = document.querySelector(".emptyImg");
let inp = document.querySelector(".userTitle")
let fromdate = document.querySelector(".calenBtn")
let textarea = document.querySelector(".userContent")
let userContents = document.querySelector(".userContents")
let noCards = document.querySelector(".contents")
let search = document.querySelector("#search")
let addNew = document.querySelector(".addNew")
let sideBarItems = document.querySelectorAll(".headItem")


//active butns function
sideBarItems.forEach(items => {
    items.addEventListener("click",()=>{
        items.classList.add("active")
        sideBarItems.forEach(allItms => {
            allItms.classList.remove("active")
        })
    })
});

let datas= [];

window.addEventListener("DOMContentLoaded",()=>{

    fetch("http://localhost:3000/post")
        .then(res => res.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                datas.push(json[i])
            }

            AllDatas(datas)
            click(datas)

            if(datas.length > 0){
                noCards.innerHTML = ""
            }
        })
        headerItems.forEach(element => {
            element.addEventListener("click",(e)=>{
            for (let k = 0; k < headerItems.length; k++) {
                headerItems[k].classList.remove("activeBtn")
                
            }
                if(e.target.innerText == "My Journals")
                {
                    AllDatas(datas)
                    click(datas)
                    e.target.classList.add("activeBtn")
                    addNew.classList.remove("hideAddNewBtn")
    
    
                }
                if(e.target.innerText == "Starred")
                {
                    // console.log(e.target);
                    AllDatas(datas.filter((element) => element.is_starred))
                    
                    click(datas.filter((element) => element.is_starred))
                    e.target.classList.add("activeBtn")
                    addNew.classList.add("hideAddNewBtn")
                    // for (let m = 0; m < datas.length; m++) {
                    //     if(datas[m].is_starred){
                    //         userContents.innerHTML = `<h2>No Starred journals</h2>`;
                    //     }
                        
                    // }
    
                }
            })
              
            });  
        searchFunction(datas)


})

pubBtn.addEventListener("click",()=>{
    console.log("kj");
    let data = {
        Title: inp.value,
        contents: textarea.value,
        from_date: fromdate.value,
        to_date: "05/01/2001",
        is_starred:false
    }
    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
    })
    
})



function AllDatas(datas) {

    if(datas.length < 1){
        userContents.innerHTML =  `<h2>No journals found!</h2>`;  
    }
    else
    {
        let listOfcontent = datas.map((element)=>
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.Title}</h5>
          <p class="card-text">${element.contents}</p>
          <a class="starredIcons"></a>
          <a href="#" class=" float-end text-danger delete"><i class="fa-solid fa-trash" id="${element.id}"></i></a>
          <a class="edit float-end text-success"><i class="fa-solid fa-pen-to-square" id="${element.id}"></i></a>
        </div>
      </div>`
        ).join("")

    
        userContents.innerHTML = listOfcontent;
    }
}
{/* <div class="listofdatas" id=${element.id}>
                <h2 class="DatasTitle">${element.Title}</h2>
                <p class="">${element.contents}</p>
                <span class="fetchingfromdata">${element.from_date}</span>
                <div class="starredIcons"></div>
                <span class="delete"><i class="fa-solid fa-trash" id="${element.id}"></i></span>
                <a class="edit"><i class="fa-solid fa-pen-to-square" id="${element.id}"></i></a>
            </div> */}

        pubBtn.addEventListener("click",()=>{

            let data = {
                Title: inp.value,
                contents: textarea.value,
                from_date: fromdate.value,
                to_date: "05/01/2001",
                is_starred:false
            }
            fetch("http://localhost:3000/post", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            })
            
        })




function click(datas) {
    const starredIcons = document.querySelectorAll(".starredIcons")

    for (let i = 0; i < datas.length; i++) {

        if (datas[i].is_starred) {
            starredIcons[i].innerHTML = `<i class="fa-solid fa-star"  id=${datas[i].id}></i>`
        }
        else {
            starredIcons[i].innerHTML = `<i class="fa-regular fa-star"  id=${datas[i].id}></i>`
        }
    
        const span = document.querySelectorAll(".starredIcons")
        // console.log(span);
        span[i].addEventListener("click", (e) => {
            console.log(span[i]);

            let value = datas[i].is_starred == false ? true : false
            let data = {
                "id":datas[i].id,
                "Title":datas[i].Title,
                "contents": datas[i].contents,
                "from_date":datas[i].from_date,
                "to_date": datas[i].to_date,
                "is_starred":value
            }
            let endPoint = 'http://localhost:3000/post/' + e.target.id
            fetch(endPoint, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)

            }).then(res => {
                console.log("Request complete! response:", res);
            }).catch((err) => console.log(err))

        })
        const deletes = document.querySelectorAll('.delete')
       
        deletes[i].addEventListener("click", (e) => {

            fetch('http://localhost:3000/post/' + e.target.id, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
        })

        // const editIcons = document.querySelectorAll(".edit")
 
        // editIcons.forEach(element => {
        //     element.addEventListener("click",()=>{
        //         ediFunctionality()
        //     // let pubBtn = document.querySelector(".pubBtn")

        //     //     // pubBtn.innerText = "Update";
        //     //     // console.log(pubBtn);
        // });
    // })




    }
}


function searchFunction(datas){

    search.addEventListener("keyup",(e) => {
        let searching = e.target.value.toLowerCase().trim()
        if (searching) {
            AllDatas(datas.filter((element) => element.Title.toLowerCase().indexOf(searching) != -1))
            click(datas.filter((element) => element.Title.toLowerCase().indexOf(searching) != -1))
        }
        else {
            AllDatas(datas)
            click(datas)
        }
    })
}
