class p5Play extends p5 {}

const buttonsContainer = document.querySelector(".button-container")
let scoreContainer = document.querySelector("#score-container")
let usernameContainer = document.querySelector("#username-container")
let gameContainer = document.querySelector("#game-container")
let totalScore = 0

function gameCanvas(speed){
    var stuff
    var sketch = (p) => {
        p.preload = () => {
            hopeImg = p.loadImage('https://i.imgur.com/DZxCqpb.png')
        }
        p.setup = () => {
            p.createCanvas(915, 640);
            p.background(50)
            //need to create more sprites, possibly change the speeds on the backend?
            stuff = [p.createSprite(300, 80, 200, 100), p.createSprite(200, -900, 150, 75), p.createSprite(800, 210, 60, 90)]
        }
        let score = []
        let scoreSpan = document.createElement("span")
            scoreSpan.className = "nes-text is-warning"
        scoreContainer.append(scoreSpan)
        p.draw = () => {
            p.clear()
            p.background(50)
            p.drawSprites();
            
            stuff.forEach((rect) => {
                rect.setSpeed(speed, 90)
                rect.rotation -= 2
                rect.onMousePressed = () => {
                    rect.remove()
                    totalScore += 1
                    scoreSpan.innerText = `Score: ${totalScore}`
                }
            })
        }
    }
    let myp5 = new p5Play(sketch)
}

function setUpButtons(){
    fetch("http://localhost:3000/levels")
    .then(r => r.json())
    .then((levelsObj) => {
        buttonsContainer.innerHTML = ""

        levelsObj.forEach((level) => {
            let levelButton = document.createElement("button")
            levelButton.innerText = level.difficulty
            buttonsContainer.append(levelButton)
            
            
            levelButton.addEventListener("click", () => {
                buttonsContainer.innerHTML = ""
                if(document.querySelector("timer")) {
                    document.querySelector("timer").remove()
                }
                totalScore = 0
                
                setTime()
                startTimer()                
                gameCanvas(level.speed)
                setTimeout(() => {
                    createUsernameFormAndFetch(level)
                    stopTimer()
                    resetTimer()
                    scoreContainer.innerText = ""
                }, 60_000)
            })  

        })
    })
}
setUpButtons()

function createUsernameFormAndFetch(level){
    
    let usernameForm = document.createElement("form")
    usernameForm.className = "add-username"

    let usernameFormInput1 = document.createElement("input")
        usernameFormInput1.name = "username"
        usernameFormInput1.placeholder = "Enter your name here..."

    let usernameFormInput2 = document.createElement("input")
        usernameFormInput2.type = "submit"
        usernameFormInput2.name = "submit"
        usernameFormInput2.className = "submit"

    usernameForm.append(usernameFormInput1, usernameFormInput2)
    usernameContainer.append(usernameForm)
    
    usernameForm.addEventListener("submit", (evt) => {
        evt.preventDefault()
        let input = evt.target.firstElementChild.value
        
        fetch(`http://localhost:3000/scores`, {
        method:'POST',
        headers: { 
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            username: input,
            value: totalScore,
            level_id: level.id
        })
        })
        .then(r => r.json())
        .then((res) => {
            usernameContainer.innerHTML = ""
            setUpButtons()
            
            if(document.querySelector("canvas")) {
                document.querySelector("canvas").remove()
            }

            var scoresArr = []

            fetch('http://localhost:3000/scores/')
            .then(r => r.json())
            .then((scoresObj) => {
                // let allScores = scoresObj
                // allScores.forEach((scores) => {
                //     // scoresArr.push(scores)
                //     // console.log(scoresArr)
                let rankingsOl = document.createElement("ol")
                    rankingsOl.innerText = "High Scores"
                gameContainer.append(rankingsOl)
                //     console.log(scores)
                scoresObj.forEach((score) => {
                    let rankingLi = document.createElement("li")
                    rankingLi.innerText = `${score.username} Points ${score.value}`
                    rankingsOl.append(rankingLi)
                    console.log(score)
                    console.log(scoresObj)
                    
                    
        
                })
            })

        })
    })
}










let score  = 0 
function removeAndScore() {
    score += 1
    console.log(score)
    this.remove();
//     fetch('http://localhost:3000/scores', {
//         method:'POST',
//         headers: { 
//          'content-type': 'application/json',
//         'accept': 'application/json'
//         },
//         body: JSON.stringify({
//             username: 
//             value: score
//         })
//     })
//     .then(r => r.json())
//     .then((scoresObj) => {
//         let scoreDiv = document.querySelector("#score")
//              scoreDiv.innerText = scoresObj.value
//     })    
}
    
