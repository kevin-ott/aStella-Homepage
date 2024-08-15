function isOpen() {
    var now = new Date()
    var opening1 = new Date()
    var opening2 = new Date()
    var closing1 = new Date()
    var closing2 = new Date()

    opening1.setHours(12)
    opening1.setMinutes(0)
    opening1.setSeconds(0)

    opening2.setHours(17)
    opening2.setMinutes(0)
    opening2.setSeconds(0)

    closing1.setHours(14)
    closing1.setMinutes(30)
    closing1.setSeconds(0)

    closing2.setHours(22)
    closing2.setMinutes(30)
    closing1.setSeconds(0)

    if (now.getDay == 0) return false

    now = now.getTime()
    opening1 = opening1.getTime()
    opening2 = opening2.getTime()
    closing1 = closing1.getTime()
    closing2 = closing2.getTime()

    if (now < opening1) return false
    if (now > closing1 && now < opening2) return false
    if (now > closing2) return false

    return true
}

const indicator = document.getElementById("open-indicator");
const text = document.getElementById("open-status")

if (isOpen()) {
    text.textContent = "Jetzt geöffnet"
    text.style.paddingLeft = ""
    indicator.style.display = ""
} else {
    text.textContent = "Zurzeit leider geschlossen"
    text.style.paddingLeft = "1rem"
    indicator.style.display = "none"
}