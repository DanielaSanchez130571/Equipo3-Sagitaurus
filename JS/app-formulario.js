console.log("Genial")



function guardar_datos(event) {
    event.preventDefault()
    const $USERNAME = documet.querySelector("#username").value
    const $PASSWORD = documet.querySelector("#password").value

    console.log($USERNAME)
    console.log($PASSWORD)

}

const $FORM = document.getElementById("miFormulario")
$FORM.onsubmit = guardar_datos
