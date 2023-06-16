function guardar_datos(event){
    event.preventDefault()
    // console.log("funciona")
    const $EMAIL = document.querySelector("#correo-usuario").value


    console.log("Correo", $EMAIL)
    console.log("Contrasena", $PASSWORD)


    /* mostrar una alerta cuando se envia formulario */
    alert("Formulario enviado correctamente")

    /* redirigir a una pagina nueva */
    window.location.href = "hoja-registro.html"
}

const $FORM = document.getElementById ("formulario__form")
$FORM.onsubmit = guardar_datos