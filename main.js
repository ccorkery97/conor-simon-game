const tiles = document.querySelectorAll('.tile')

let easy = 2000
let normal = 1000
let hard = 800

tiles.forEach(function(tile) {
    tile.addEventListener('mousedown', function() {
        lightUp(tile)
        if (tile.classList[1] == 'red') {
            yourOrder.push(0)
        } else if (tile.classList[1] == 'blue') {
            yourOrder.push(1)
        } else if (tile.classList[1] == 'yellow') {
            yourOrder.push(2)
        } else {
            yourOrder.push(3)
        }
    })
    tile.addEventListener('mouseup', function() {
        lightUp(tile)
    })
})


function lightUp(element) {
    if (element.style.opacity == 1) {
        element.style.opacity = .4
    } else {
        element.style.opacity = 1
    }
}

let yourOrder = []
let randomOrder = []

function randomLightUp(num) {
    let tileNumber = 0
    tiles.forEach(function(tile) {
        if (tileNumber == num) {
            lightUp(tile)
            setTimeout(function() {
                lightUp(tile)
            }, 500)
        }
        tileNumber++
    })
}


function sequence(difficulty) {
    let num = 0
    let playTime = setInterval(function() {
        randomLightUp(randomOrder[num]) 
        if (num == (randomOrder.length - 1)) {
        clearInterval(playTime)
        } else {
        num++
        }
    }, difficulty)  
}

let message = document.querySelector('.loser')


function yourSequence(difficulty) {
    let yourTime = setInterval(function() {
        if (yourOrder.length == randomOrder.length) {
            clearInterval(yourTime)
            if (checkSequence(difficulty)) {
                message.textContent = 'Good Job!'
            } else {
                message.textContent = 'Sorry Game Over'
            }
        }  
    }, 500)
}


let score = document.querySelector('.score')
let scoreCounter = 0

function gamePlay(difficulty) {
    if (message.textContent == 'Sorry Game Over') {
        message.textContent = `Let's Play!`
        yourOrder = []
        randomOrder = []
        scoreCounter = 0
    }
    score.textContent = `Score: ${scoreCounter}`
    randomOrder.push(Math.floor((Math.random() * 4)))
    sequence(difficulty)
    yourSequence(difficulty)
}



function checkSequence(difficulty) {
    for (let i = 0; i < yourOrder.length; i++) {
        if (yourOrder[i] != randomOrder[i]) {
            return false
        } 
    }
    yourOrder = []
    scoreCounter++
    gamePlay(difficulty)
    return true
}

let startGame = document.querySelectorAll('.restart')
startGame.forEach(function(element) {
    if (element.classList[1] == 'easy') {
        element.addEventListener('click', function() {
            gamePlay(easy)
        })
    } else if (element.classList[1] == 'normal') {
        element.addEventListener('click', function() {
            gamePlay(normal)
        })
    } else {
        element.addEventListener('click', function() {
            gamePlay(hard)
        })
    }
})


