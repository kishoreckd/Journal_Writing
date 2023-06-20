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