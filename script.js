


const eKey = document.getElementById("eventkey")
const eNum = document.getElementById("eventnumber")
const eCode = document.getElementById("eventcode")
const bigNum = document.getElementById("big")

document.addEventListener("keypress", () => {
    eKey.textContent = event.key
    eNum.textContent = event.which
    eCode.textContent = event.code
    bigNum.textContent = event.which
    })


