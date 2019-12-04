hardButton = document.querySelector("#hard-button")

hardButton.addEventListener("click", (evt) => {
    console.log(evt.target)
    gravity = 7
    drawEmojis()
})