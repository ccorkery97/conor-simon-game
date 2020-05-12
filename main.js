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

let round = 1
for (let i = 0; i < round; i++) {
    randomOrder.push(Math.floor((Math.random() * 4)))
    let tileNumber = 0
    tiles.forEach(function(tile) {
        if (tileNumber == randomOrder[i]) {
            lightUp(tile)
            setTimeout(function() {
                lightUp(tile)
            }, 1000)
        }
        tileNumber++
    })
}






