let spielfeld
let eingabefeld = []

function eingabePruefen() {
    let richtigEingegeben = true
    for (let i = 0; i < spielfeld.length; i++) {
        for (let j = 0; j < spielfeld[0].length; j++) {
            if (spielfeld[i][j] != eingabefeld[i][j]) {
                richtigEingegeben = false
            }
        }
    }

    if (richtigEingegeben) {
        window.location.href = `../erfolg/index.html`

    } else {
        location.reload()
    }
}

function handleClick(i, j, id) {
    if (eingabefeld[i][j] == 1) {
        //spieler wählt feld ab
        eingabefeld[i][j] = 0
    } else {
        //spieler wählt feld an 
        eingabefeld[i][j] = 1
    }
    spielfeldAktualisieren()
}

function spielfeldAktualisieren() {
    let feldIndex = 0

    for (let i = 0; i < eingabefeld.length; i++) {
        for (let j = 0; j < eingabefeld[0].length; j++) {
            if (eingabefeld[i][j] == 1) {
                document.getElementById(`${feldIndex}`).style.backgroundColor = 'red'
            } else {
                document.getElementById(`${feldIndex}`).style.backgroundColor = 'transparent'
            }
            feldIndex++
        }
    }
}

window.onload = function () {
    spielfeld = spielfeldLaden()
    eingabefeldErstellen()
    //kann weg wenn man die Loesung nicht in der Konsole sehen möchte
    console.log(spielfeld)
}

function eingabefeldErstellen() {
    for (let i = 0; i < 5; i++) {
        eingabefeld[i] = []
        for (let j = 0; j < 5; j++) {
            eingabefeld[i][j] = 0
        }
    }
}

function spielfeldLaden() {
    let string = localStorage.getItem('spielfeld')
    let array = JSON.parse(string)
    return array
}