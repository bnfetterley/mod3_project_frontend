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
            nabeelImg = p.loadImage('https://i.imgur.com/HjGADnN.png')
            munaImg = p.loadImage('https://i.imgur.com/NF0Awnm.png')
            vannidaImg = p.loadImage('https://i.imgur.com/rWMfog0.png')
            ericImg = p.loadImage('https://i.imgur.com/u0JdjN0.png')
            nabeel2Img = p.loadImage('https://i.imgur.com/gTnSrzv.png')
            stephenImg = p.loadImage('https://i.imgur.com/PoEnyPm.png')
            briImg = p.loadImage('https://i.imgur.com/CUj0iOt.png')
            alinaImg = p.loadImage('https://i.imgur.com/DqWmgSN.png')
            alexImg = p.loadImage('https://i.imgur.com/FU2dD9u.png')
            anieceImg = p.loadImage('https://i.imgur.com/YbTBpj7.png')
            annieImg = p.loadImage('https://i.imgur.com/uFJEAfU.png')
            diegoImg = p.loadImage('https://i.imgur.com/EIs3VQl.png')
            geneImg = p.loadImage('https://i.imgur.com/gmBS2jK.png')
            jonImg = p.loadImage('https://i.imgur.com/KwweAEr.png')
            keenanImg = p.loadImage('https://i.imgur.com/uxwveR7.png')
            carlieImg = p.loadImage('https://i.imgur.com/k37XmaY.png')
            nicImg = p.loadImage('https://i.imgur.com/vPZ8e3v.png')
            solomonImg = p.loadImage('https://i.imgur.com/5xC5AIq.png')
            theresaImg = p.loadImage('https://i.imgur.com/2k7qlcE.png')
            yuriyImg = p.loadImage('https://i.imgur.com/mVSHCua.png')
            raqImg = p.loadImage('https://i.imgur.com/to2bRm0.png')
            rubenImg = p.loadImage('https://i.imgur.com/pKLhoVH.png')
            hamiImg = p.loadImage('https://i.imgur.com/5GPxgIS.png')
        }
        p.setup = () => {
            p.createCanvas(915, 640);
            p.background(50)
            
            hope = p.createSprite(300, 150, 600, 120);
                hope.addImage(hopeImg);
            nabeel = p.createSprite(200, -50, 800, 120);
                nabeel.addImage(nabeelImg);
            muna = p.createSprite(50, -50, 300, 220);
                muna.addImage(munaImg);
            vannida = p.createSprite(890, -50, 300, 120);
                vannida.addImage(vannidaImg);
            eric = p.createSprite(600, -50, 300, 120);
                eric.addImage(ericImg);
            nabeel2 = p.createSprite(789, -50, 3, 30);
            nabeel2.addImage(nabeel2Img);
            // stephen = p.createSprite(280, 100, 300, 120);
            // stephen.addImage(stephenImg);
            // bri = p.createSprite(340, 100, 300, 120);
            // bri.addImage(briImg);
            // alina = p.createSprite(213, 100, 300, 120);
            // alina.addImage(alinaImg);
            // alex = p.createSprite(385, 100, 300, 120);
            // alex.addImage(alexImg);
            // aniece = p.createSprite(256, 100, 300, 120);
            // aniece.addImage(anieceImg);
            // annie = p.createSprite(100, 100, 300, 120);
            // annie.addImage(annieImg);
            // diego = p.createSprite(240, 100, 300, 120);
            // diego.addImage(diegoImg);
            // gene = p.createSprite(783, 100, 300, 120);
            // gene.addImage(geneImg);
            // jon = p.createSprite(170, 100, 300, 120);
            // jon.addImage(jonImg);
            // keenan = p.createSprite(430, 100, 300, 120);
            // keenan.addImage(keenanImg);
            // carlie = p.createSprite(300, 100, 300, 120);
            // carlie.addImage(carlieImg);
            // nic = p.createSprite(129, 100, 300, 120);
            // nic.addImage(nicImg);
            // solomon = p.createSprite(300, 100, 300, 120);
            // solomon.addImage(solomonImg);
            // theresa = p.createSprite(145, 100, 300, 120);
            // theresa.addImage(theresaImg);
            // yuriy = p.createSprite(239, 100, 300, 120);
            // yuriy.addImage(yuriyImg);
            // raq = p.createSprite(250, 100, 300, 120);
            // raq.addImage(raqImg);
            // ruben = p.createSprite(290, 100, 300, 120);
            // ruben.addImage(rubenImg);
            // hami = p.createSprite(329, 100, 300, 120);
            // hami.addImage(hamiImg);

            stuff = [p.createSprite(300, 80, 200, 100), p.createSprite(200, -900, 150, 75), p.createSprite(800, 210, 60, 90), p.createSprite(500, 410, 60, 90), hope, nabeel, muna, vannida, eric, nabeel2] 
            // , nabeel2, stephen, bri, alina, alex, aniece, annie, diego, gene, jon, keenan, carlie, nic, solomon, theresa, yuriy, raq, ruben, hami]
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
                levelButton.className = "buttons"
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
                    rankingsOl.id = "ranking"
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
    
