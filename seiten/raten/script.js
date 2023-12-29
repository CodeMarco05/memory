let spielfeld


window.onload = function () {
    spielfeld = spielfeldLaden()
}

function spielfeldLaden(){
    let string = localStorage.getItem('spielfeld')
    let array = JSON.parse(string)
    return array
}