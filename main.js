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







