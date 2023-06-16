function guardar_datos(event){
    event.preventDefault()
    // console.log("funciona")
    const $USERNAME = document.querySelector("#nombre-usuario").value


    console.log("Nombre: ",$USERNAME)
    

    /* mostrar una alerta cuando se envia formulario */
    alert("Formulario enviado correctamente")

    /* redirigir a una pagina nueva */
    window.location.href = "pagina2.html"
}

const $FORM = document.getElementById ("formulario__form")
$FORM.onsubmit = guardar_datos