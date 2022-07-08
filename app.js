let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let x = 0, y = 0

function homeAdd1() {
    x += 1
    homeScore.textContent = x
}

function homeAdd2() {
    x += 2
    homeScore.textContent = x
}

function homeAdd3() {
    x += 3
    homeScore.textContent = x   
}


function guestAdd1() {
    y += 1
    guestScore.textContent = y
}

function guestAdd2() {
    y += 2
    guestScore.textContent = y
}

function guestAdd3() {
    y += 3
    guestScore.textContent = y
}

function reset() {
    x = 0
    y = x
    homeScore.textContent = x
    guestScore.textContent = y
}