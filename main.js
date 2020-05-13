const tiles = document.querySelectorAll('.tile')

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
randomOrder.push(Math.floor((Math.random() * 4)))

function randomLightUp(num) {
    let tileNumber = 0
    tiles.forEach(function(tile) {
        if (tileNumber == num) {
            lightUp(tile)
            setTimeout(function() {
                lightUp(tile)
            }, 700)
        }
        tileNumber++
    })
}


function sequence() {
    let num = 0
    let playTime = setInterval(function() {
        randomLightUp(randomOrder[num]) 
        if (num == (randomOrder.length - 1)) {
        clearInterval(playTime)
        } else {
        num++
        }
    }, 2000)  
}

function yourSequence() {
    let yourTime = setInterval(function() {
        if (yourOrder.length == randomOrder.length) {
            clearInterval(yourTime)
            if (checkSequence()) {
                console.log('good job')
            } else {
                console.log('game-over')
            }
        }  
    }, 500)
}

function gamePlay() {
    randomOrder.push(Math.floor((Math.random() * 4)))
    sequence()
    yourSequence()
}


let startGame = document.querySelector('.restart')
startGame.addEventListener('click', gamePlay)


function checkSequence() {
    for (let i = 0; i < yourOrder.length; i++) {
        if (yourOrder[i] != randomOrder[i]) {
            return false
        } 
    }
    gamePlay()
    return true
}
