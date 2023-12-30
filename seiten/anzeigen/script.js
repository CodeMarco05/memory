let globalesSpielfeld

window.onload = function () {
    let url = new URLSearchParams(window.location.search)
    let schwierigkeit = url.get('schwierigkeit')

    let spielfeld = spielfeldGenerieren(schwierigkeit)

    globalesSpielfeld = spielfeld

    spielfeldAnzeigen(spielfeld)

    if (schwierigkeit == 0) {
        setTimeout(spielStart, 5000)
    } else if (schwierigkeit == 1) {
        setTimeout(spielStart, 3000)
    } else {
        setTimeout(spielStart, 2000)
    }

}

function spielStart() {
    localStorage.setItem('spielfeld', JSON.stringify(globalesSpielfeld))
    window.location.href = '../raten/index.html'
}

function spielfeldAnzeigen(spielfeld) {
    let indexFelder = 0

    for (let i = 0; i < spielfeld.length; i++) {
        for (let j = 0; j < spielfeld[0].length; j++) {
            let kaestchen = document.getElementById(`${indexFelder}`)

            if (spielfeld[i][j] == 1) {
                kaestchen.style.backgroundColor = 'red'
            }

            indexFelder++
        }
    }

}

function spielfeldGenerieren(schwierigkeit) {
    let spielfeld = []

    for (let i = 0; i < 5; i++) {
        spielfeld[i] = []
        for (let j = 0; j < 5; j++) {
            let zufaelligeZahl
            if (schwierigkeit == 0) {
                zufaelligeZahl = zufallsZahl(0, 30)
            } else if (schwierigkeit == 1) {
                zufaelligeZahl = zufallsZahl(0, 25)
            } else {
                zufaelligeZahl = zufallsZahl(0, 10)
            }

            if (zufaelligeZahl <= 5) {
                spielfeld[i][j] = 1
            } else {
                spielfeld[i][j] = 0
            }
        }
    }
    return spielfeld
}

function zufallsZahl(min, max) {
    return Math.random() * (max - min) + min;
}


