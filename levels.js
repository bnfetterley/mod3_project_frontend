class p5Play extends p5 {}

const buttonsContainer = document.querySelector(".button-container")
function gameCanvas(speed){
    var stuff
    var sketch = (p) => {
        // p.preload = () => {
        //     hopeImg = p.loadImage('https://i.imgur.com/DZxCqpb.png')
        // }
        p.setup = () => {
            p.createCanvas(915, 640);
            p.background(50)

            stuff = [p.createSprite(300, 80, 200, 100), p.createSprite(200, -900, 150, 75), p.createSprite(800, 210, 60, 90)]
        }
        p.draw = () => {
            p.clear()
            p.background(50)
            p.drawSprites();

            stuff.forEach((rect) => {
                rect.setSpeed(speed, 90)
                rect.rotation -= 2
                rect.onMousePressed = () => {
                    console.log("hslo");
                    rect.remove()
                }
            })

        }
    }
    let myp5 = new p5Play(sketch)
}

fetch("http://localhost:3000/levels")
.then(r => r.json())
.then((levelsObj) => {
    levelsObj.forEach((level) => {
        //create button
        let levelButton = document.createElement("button")
            levelButton.innerText = level.difficulty
        buttonsContainer.append(levelButton)
        //add event listener that will call gameCanvas(level.speed)
        levelButton.addEventListener("click", () => {
            gameCanvas(level.speed)
        })  
    })
})


    // function removeAndScore() {
    //     score += 1;
    //     this.remove();
    //     fetch(`http://localhost:3000/scores/${scores.id}`, {
    //       method:'PATCH',
    //       headers: { 
    //         'content-type': 'application/json',
    //         'accept': 'application/json'
    //       },
    //       body: JSON.stringify({
    //           value: ++score.value
    //       })
    //     })
    //     .then(r => r.json())
    //     .then((scoresObj) => {
    //         let scoreDiv = document.querySelector("#score")
    //         scoreDiv.innerText = scoresObj.value
    //     })
    
    // }
    
