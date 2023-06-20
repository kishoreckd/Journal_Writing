/* Getting Element from Html*/
let passwordicon = document.querySelectorAll("#passwordicon")


/* ---------------------------------------------------------------------------------------- */

/* eye icon changing functionality*/
for (let i = 0; i < passwordicon.length; i++) {
    passwordicon[i].addEventListener("click", (e) => {

        if (e.target.parentElement.previousElementSibling.type == "password") {
            e.target.className = "fa-solid fa-eye"
            e.target.parentElement.previousElementSibling.type = "text"
        }

        else if (e.target.parentElement.previousElementSibling.type == "text") {
            e.target.className = "fa-solid fa-eye-slash"
            e.target.parentElement.previousElementSibling.type = "password"



        }
    })
}


//form validation

let FullName = document.querySelector("#your-name")

let EmailId =  document.querySelector("#emailId")
let Password = document.querySelector("#password")
let conformPassword = document.querySelector("#conform-password")


let form =  document.querySelector("form")


form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let FullNameVal = FullName.value.trim();
    let EmailVal = EmailId.value.trim();
    let PasswordVal = Password.value.trim();
    let conformPasswordVal = conformPassword.value.trim()

    if(FullNameVal === ""){
        seterror(FullName,"Name is required")
    }
    else{
        setSuccess(FullName,"success")
    }

    if(EmailVal === ""){
        seterror(EmailId,"Email is requried")
    }
    else if(!validEmail(EmailVal)){
        seterror(EmailId,"Enter valid email")
    }
    else{
        setSuccess(EmailId,"success")
    }

    if(PasswordVal ===""){
        seterror(Password,"password is required")
    }
    else if(!ValidPassword(PasswordVal)){
        seterror(Password,"enter valid passsowrd")
    }

    if(PasswordVal != conformPasswordVal){
        seterror(conformPassword,"password does not match match")
    }
    else if(conformPasswordVal === ""){
        seterror(conformPassword,"conform password required")
    }
    else{
        setSuccess(conformPassword,"password success")
    }
})


//the user give the wrong value in input the setterror function trigger
function seterror(element,message){
   let TargetElement = element;
   TargetElement.style.border = "1px solid  hsl(14, 100%, 33%, 100%)"
}

//the user give the correct value in input the setterror function trigger
function setSuccess(element,message){
    let TargetElement = element;
    TargetElement.style.border = "1px solid white"
}


//Email id validation
const validEmail = (email) =>{
    return email.toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}
//Minimum eight characters, at least one letter, one number and one special character:

const ValidPassword = (password) =>{
    return password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/)
}



//keyup event for disable the alert

let Allinput = document.querySelectorAll("input")

Allinput.forEach((element)=>{
    element.addEventListener("keyup",()=>{
        element.style.border = "1px solid white"
    })
})