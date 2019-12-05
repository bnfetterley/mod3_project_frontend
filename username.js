//Grab and render top scores for each level 
let rankingContainer = document.querySelector("#ranking-container")
let rankingsOl = document.createElement("ol")
let rankingLi = document.createElement("li")
rankingContainer.append(rankingsOl)
rankingsOl.append(rankingLi)

var scoresArr = []

fetch('http://localhost:3000/scores/')
.then(r => r.json())
.then((scoresObj) => {
    scoresObj.forEach((scores) => {
        //halp pls
        scoresArr.push(scores.value)
        console.log(scoresArr)
    })
})