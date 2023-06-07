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