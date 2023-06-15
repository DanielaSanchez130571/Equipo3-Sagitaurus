const $ELEMENTO = document.getElementsByClassName("elemntos")
console.log($ELEMENTO)

let elemntos_id = [], elemntos_mostrados = 0

for (let i = 0; i < $ELEMENTO.length; i++) {
    elemntos_id.push($ELEMENTO[i].getAttribute("id"))  
}

const $BTN_NEXT = document.getElementById("next")
$BTN_NEXT.onclick = next

const $BTN_PREV = document.getElementById("prev")
$BTN_PREV.onclick = prev

function next() {
    elemntos_mostrados++
}