intermediateButton = document.querySelector("#intermediate-button")


intermediateButton.addEventListener("click", (evt) => {
    console.log(evt.target)
    gravity = 3
    drawEmojis()
})
