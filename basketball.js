// ELEMENT ID
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

// COUNT
let homeCount = 0;
let guestCount = 0;

//-------------------------------------------------HOME BUTTONS
function add1() {
    homeCount += 1
    homeEl.textContent = homeCount
}
function add2() {
    homeCount += 2
    homeEl.textContent = homeCount
}
function add3() {
    homeCount += 3
    homeEl.textContent = homeCount
}
function reset() {
    homeCount = 0
    homeEl.textContent = homeCount
}

//-------------------------------------------------GUEST BUTTONS
function guest1() {
    guestCount += 1
    guestEl.textContent = guestCount
}
function guest2() {
    guestCount += 2
    guestEl.textContent = guestCount
}
function guest3() {
    guestCount += 3
    guestEl.textContent = guestCount
}
function guestreset() {
   guestCount = 0
    guestEl.textContent = guestCount
}
