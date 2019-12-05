let usernameContainer = document.querySelector("#username-container")
let usernameForm = document.createElement("form")
    usernameForm.className = "add-username"

let usernameFormInput1 = document.createElement("input")
    usernameFormInput1.name = "username"
    usernameFormInput1.placeholder = "Enter your name here..."

let usernameFormInput2 = document.createElement("input")
    usernameFormInput2.type = "submit"
    usernameFormInput2.name = "submit"
    usernameFormInput2.value = "Start"
    usernameFormInput2.className = "submit"

usernameForm.append(usernameFormInput1, usernameFormInput2)
usernameContainer.append(usernameForm)

usernameForm.addEventListener("submit", (evt) => {
    console.log(evt.target)
})