document.getElementById("formulariofan").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let pelicula = document.getElementById("pelicula").value;
    let mensaje = document.getElementById("mensaje").value;
    let aceptar = document.getElementById("aceptar").checked;

    if (nombre == "" || email == "" || pelicula == "" || mensaje == "" || !aceptar) {
        alert("Por favor completa todos los campos antes de enviar.");
        return;
    }

    let peliculanombre = document.getElementById("pelicula").options[document.getElementById("pelicula").selectedIndex].text;

    document.getElementById("exitonombre").textContent = nombre;
    document.getElementById("exitoemail").textContent = email;
    document.getElementById("exitopelicula").textContent = peliculanombre;

    document.getElementById("formulariofan").style.display = "none";
    document.getElementById("mensajeexito").style.display = "block";
});

document.getElementById("botonnuevo").addEventListener("click", function() {
    document.getElementById("formulariofan").reset();
    document.getElementById("formulariofan").style.display = "block";
    document.getElementById("mensajeexito").style.display = "none";
});
