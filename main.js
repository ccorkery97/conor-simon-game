const tiles = document.querySelectorAll('.tile')

tiles.forEach(function(tile) {
    tile.addEventListener('mousedown', function() {
        lightUp(tile)
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


let randomOrder = []
randomOrder.push(Math.floor((Math.random() * 4)))
randomOrder.push(Math.floor((Math.random() * 4)))



function randomLightUp(num) {
    let tileNumber = 0
    tiles.forEach(function(tile) {
        if (tileNumber == num) {
            lightUp(tile)
            setTimeout(function() {
                lightUp(tile)
            }, 1000)
        }
        tileNumber++
    })
}

let num = 0
let playTime = setInterval(function() {
    randomLightUp(randomOrder[num]) 
    num++
}, 2000)












