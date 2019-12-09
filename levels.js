class p5Play extends p5 {}

const buttonsContainer = document.querySelector(".button-container")
let scoreContainer = document.querySelector("#score-container")
let usernameContainer = document.querySelector("#username-container")
let gameContainer = document.querySelector("#game-container")
let totalScore = 0

function gameCanvas(speed){
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
            anieceImg = p.loadImage('https://i.imgur.com/YbTBpj7.png?2')
            annieImg = p.loadImage('https://i.imgur.com/uFJEAfU.png?1')
            diegoImg = p.loadImage('https://i.imgur.com/EIs3VQl.png?1')
            geneImg = p.loadImage('https://i.imgur.com/gmBS2jK.png?1')
            jonImg = p.loadImage('https://i.imgur.com/KwweAEr.png?1')
            keenanImg = p.loadImage('https://i.imgur.com/uxwveR7.png?1')
            carlieImg = p.loadImage('https://i.imgur.com/k37XmaY.png?1')
            nicImg = p.loadImage('https://i.imgur.com/vPZ8e3v.png?1')
            solomonImg = p.loadImage('https://i.imgur.com/5xC5AIq.png?1')
            theresaImg = p.loadImage('https://i.imgur.com/2k7qlcE.png?1')
            yuriyImg = p.loadImage('https://i.imgur.com/mVSHCua.png?1')
            raqImg = p.loadImage('https://i.imgur.com/to2bRm0.png?1')
            rubenImg = p.loadImage('https://i.imgur.com/pKLhoVH.png?1')
            hamiImg = p.loadImage('https://i.imgur.com/5GPxgIS.png?1')
            nickyImg = p.loadImage('https://i.imgur.com/7UG9Vpz.png?1')
        }
        
        p.setup = () => {
            p.createCanvas(915, 640);
            p.background(50);
            let randomNumber = () => {
                return Math.floor(Math.random() * 800)+ 100;
            }
            let randomYNumber = () => {
                return Math.floor(Math.random() * -2000)+ 1 ;
            }

            console.log(randomYNumber())
            newFriends = [];
            hope = p.createSprite(randomNumber(), randomYNumber(), 600, 120);
                hope.addImage(hopeImg);
            nabeel = p.createSprite(randomNumber(), randomYNumber(), 800, 120);
                nabeel.addImage(nabeelImg);
            muna = p.createSprite(randomNumber(), randomYNumber(), 300, 220);
                muna.addImage(munaImg);
            vannida = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                vannida.addImage(vannidaImg);
            eric = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                eric.addImage(ericImg);
            nabeel2 = p.createSprite(randomNumber(), randomYNumber(), 3, 30);
                nabeel2.addImage(nabeel2Img);
            stephen = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                stephen.addImage(stephenImg);                               
            stephen2 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                stephen2.addImage(stephenImg);                             
            bri = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                bri.addImage(briImg);
            alina = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                alina.addImage(alinaImg);
            alex = p.createSprite(randomNumber(), randomYNumber(), 10, 10);
                alex.addImage(alexImg);                               
            aniece = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                aniece.addImage(anieceImg);                           
            annie = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                annie.addImage(annieImg);                                   
            diego = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                diego.addImage(diegoImg);                                   
            gene = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                gene.addImage(geneImg);                                   
            jon = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                jon.addImage(jonImg);
            keenan = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                keenan.addImage(keenanImg);
            carlie = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                carlie.addImage(carlieImg);
            nic = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                nic.addImage(nicImg);
            solomon = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                solomon.addImage(solomonImg);
            theresa = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                theresa.addImage(theresaImg);
            yuriy = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                yuriy.addImage(yuriyImg);
            raq = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                raq.addImage(raqImg);
            ruben = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                ruben.addImage(rubenImg);
            hami = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                hami.addImage(hamiImg);
            nicky = p.createSprite(randomNumber(), randomYNumber(), 300, 120)
                nicky.addImage(nickyImg)
            
            //second set
            hope2 = p.createSprite(randomNumber(), randomYNumber(), 600, 120);
                hope2.addImage(hopeImg);
            nabeel3 = p.createSprite(randomNumber(), randomYNumber(), 800, 120);
                nabeel3.addImage(nabeelImg);
            muna2 = p.createSprite(randomNumber(), randomYNumber(), 300, 220);
                muna2.addImage(munaImg);
            vannida2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                vannida2.addImage(vannidaImg);
            eric2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                eric2.addImage(ericImg);
            nabeel4 = p.createSprite(randomNumber(), randomYNumber(), 3, 30);
                nabeel4.addImage(nabeel2Img);
            stephen3 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                stephen3.addImage(stephenImg);                               
            stephen4 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                stephen4.addImage(stephenImg);                              //MAKE SMALLER
            bri2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                bri2.addImage(briImg);
            alina2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                alina2.addImage(alinaImg);
            alex2 = p.createSprite(randomNumber(), randomYNumber(), 10, 10);
                alex2.addImage(alexImg);                               //MAKE SMALLER!!
            aniece2 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
                aniece2.addImage(anieceImg);                               //MAKE SMALLER!!
            annie2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                annie2.addImage(annieImg);                                   
            diego2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                diego2.addImage(diegoImg);                                   
            gene2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                gene2.addImage(geneImg);                                   
            jon2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                jon2.addImage(jonImg);
            keenan2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                keenan2.addImage(keenanImg);
            carlie2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                carlie2.addImage(carlieImg);
            nic2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                nic2.addImage(nicImg);
            solomon2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                solomon2.addImage(solomonImg);
            theresa2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                theresa2.addImage(theresaImg);
            yuriy2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
                yuriy2.addImage(yuriyImg);
            raq2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            raq2.addImage(raqImg);
            ruben2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            ruben2.addImage(rubenImg);
            hami2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            hami2.addImage(hamiImg);
            nicky2 = p.createSprite(randomNumber(), randomYNumber(), 300, 120)
                nicky2.addImage(nickyImg)

            //third set
            hope3 = p.createSprite(randomNumber(), randomYNumber(), 600, 120);
            hope3.addImage(hopeImg);
            nabeel5 = p.createSprite(randomNumber(), randomYNumber(), 800, 120);
            nabeel5.addImage(nabeelImg);
            muna3 = p.createSprite(randomNumber(), randomYNumber(), 300, 220);
            muna3.addImage(munaImg);
            vannida3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            vannida3.addImage(vannidaImg);
            eric3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            eric3.addImage(ericImg);
            nabeel6 = p.createSprite(randomNumber(), randomYNumber(), 3, 30);
            nabeel6.addImage(nabeel2Img);
            stephen5 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
            stephen5.addImage(stephenImg);                               
            stephen6 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
            stephen6.addImage(stephenImg);                              
            bri3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            bri3.addImage(briImg);
            alina3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            alina3.addImage(alinaImg);
            alex3 = p.createSprite(randomNumber(), randomYNumber(), 10, 10);
            alex3.addImage(alexImg);                              
            aniece3 = p.createSprite(randomNumber(), randomYNumber(), -10, -10);
            aniece3.addImage(anieceImg);                          
            annie3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            annie3.addImage(annieImg);                                   
            diego3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            diego3.addImage(diegoImg);                                   
            gene3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            gene3.addImage(geneImg);                                   
            jon3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            jon3.addImage(jonImg);
            keenan3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            keenan3.addImage(keenanImg);
            carlie3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            carlie3.addImage(carlieImg);
            nic3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            nic3.addImage(nicImg);
            solomon3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            solomon3.addImage(solomonImg);
            theresa3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            theresa3.addImage(theresaImg);
            yuriy3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            yuriy3.addImage(yuriyImg);
            raq3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            raq3.addImage(raqImg);
            ruben3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            ruben3.addImage(rubenImg);
            hami3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120);
            hami3.addImage(hamiImg);
            nicky3 = p.createSprite(randomNumber(), randomYNumber(), 300, 120)
            nicky3.addImage(nickyImg)

            rectangles = [p.createSprite(randomNumber(), -50, 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 75), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100),p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100),p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 100, 100), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50), p.createSprite(randomNumber(), randomYNumber(), 50, 50)] 

            friends = [hope, nabeel, muna, vannida, eric, nabeel2,hope, nabeel, muna, vannida, eric, nabeel2, stephen,stephen2, bri, alina, alex, aniece, annie, diego, gene, jon, keenan, carlie, nic, solomon, theresa, yuriy, raq, ruben, hami, nicky,

                hope2, nabeel3, muna2, vannida2, eric2, nabeel4, hope2, nabeel, muna2, vannida2, eric2, nabeel2, stephen3, stephen4, bri2, alina2, aniece2, annie2, diego2, gene2, jon2, keenan2, carlie2, nic2, solomon2, theresa2, yuriy2, raq2, ruben2, hami2, nicky2, alex3, alex3, stephen5, stephen6, nabeel5

                // hope3, nabeel5, muna3, vannida3, eric3, nabeel6, hope3, nabeel, muna3, vannida3, eric3, nabeel3, stephen5, stephen6,bri3, alina3, alex3, aniece3, annie3, diego3, gene3, jon3, keenan3, carlie3, nic3, solomon3, theresa3, yuriy3, raq3, ruben3, hami3, nicky3
            
            ] 
            
           
        }

        let scoreSpan = document.createElement("span")
            scoreSpan.className = "nes-text is-warning"
        scoreContainer.append(scoreSpan)

        p.draw = () => {
            p.clear()
            p.background(50)
            
            friends.forEach((rect) => {
                // console.log(newFriends)
                rect.setSpeed(speed, 90)
                rect.rotation -= 2
                p.drawSprites();
                rect.onMousePressed = () => {
                    rect.remove()
                    totalScore += 1
                    scoreSpan.innerText = `Score: ${totalScore}`
                }
            })
            rectangles.forEach((rect) => {
                rect.setSpeed(speed, 90)
                rect.rotation -= 2
                rect.onMousePressed = () => {
                    rect.remove()
                    totalScore -= 1
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
                }, 15_000)
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
