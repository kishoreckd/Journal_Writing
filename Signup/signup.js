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

let alertMessage = document.querySelector(".text-2")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let FullNameVal = FullName.value.trim();
    let EmailVal = EmailId.value.trim();
    let PasswordVal = Password.value.trim();
    let conformPasswordVal = conformPassword.value.trim()

    if(FullNameVal === ""){
        seterror(alertMessage,"name reuired")
    }
    else if(EmailVal === ""){
        seterror(alertMessage,"email required")
    }
    else if(!validEmail(EmailVal)){
        seterror(alertMessage,"invalid email")
    }
    else if(PasswordVal === ""){
        seterror(alertMessage,"password required")
    }
    else if(!ValidPassword(PasswordVal)){
            seterror(alertMessage,"enter valid passsowrd")
    }
    else if(conformPasswordVal === ""){
        seterror(alertMessage,"conform password required")
    }
    else if(PasswordVal != conformPasswordVal){
      seterror(alertMessage,"password does not match match")
    }
    if(FullNameVal === "" && PasswordVal === "" && EmailVal === "" && conformPasswordVal === ""){
        seterror(alertMessage,"all field is required")
    }

})


//the user give the wrong value in input the setterror function trigger

function seterror(element,message){
    element.innerText = message;
    toastNotification();
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


//toast notfication




//toast notfication completed      
toast = document.querySelector(".toast")
closeIcon = document.querySelector(".close"),
progress = document.querySelector(".progress");

let timer1, timer2;

function toastNotification(){
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress.classList.remove("active");
    }, 5300);
}

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
    
    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  });