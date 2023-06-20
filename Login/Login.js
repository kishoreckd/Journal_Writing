let passwordicon = document.querySelector("#passwordicon")


passwordicon.addEventListener("click", (e) => {

    if (e.target.parentElement.previousElementSibling.type == "password") {
        e.target.className = "fa-solid fa-eye"
        e.target.parentElement.previousElementSibling.type = "text"
    }

    else if (e.target.parentElement.previousElementSibling.type == "text") {
        e.target.className = "fa-solid fa-eye-slash"
        e.target.parentElement.previousElementSibling.type = "password"



    }

})


let EmailId =  document.querySelector("#emailId")
let Password = document.querySelector("#password")

let form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let emailVal = EmailId.value.trim();
    let PasswordVal = Password.value.trim()

    if(emailVal === ""){
        seterror(EmailId)
    }else{
        setsucces(EmailId)
    }

    if(PasswordVal === ""){
        seterror(Password)
    }
    else{
        setsucces(Password)
    }
})

function seterror(element){
    element.style.border = "1px solid hsl(14, 100%, 33%, 100%)"
}
function setsucces(element){
    element.style.border = "1px solid white"
}