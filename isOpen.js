function isOpen() {
    const now = new Date()

    if (now.getDay == 0) return false

    console.log(now)
    const hour = now.getHours()
    const minute = now.getMinutes()

    if (hour < 12) return false
    else if (13 < hour < 15 && minute > 30) return false
    else if (21 < hour < 12 && minute > 30) return false

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