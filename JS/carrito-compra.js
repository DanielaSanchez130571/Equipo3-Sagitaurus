function guardar_datos(event){
    event.preventDefault()

    const $USERNAME = document.querySelector("#nombre-usuario").value
    const $APELLIDO = document.querySelector("#apellido-usuario").value

    console.log("Nombre: ",$USERNAME)
    console.log("Apellido: ",$APELLIDO)
   

    

    /* mostrar una alerta cuando se envia formulario */
    alert("Formulario enviado correctamente")

    /* redirigir a una pagina nueva */
    window.location.href = "../index.html"
}

const $FORM = document.getElementById ("formulario__form")
$FORM.onsubmit = guardar_datos