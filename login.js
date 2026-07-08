const fechaCorrecta = "2020-03-03"; // Formato YYYY-MM-DD

function verificar() {

    const fecha = document.getElementById("fecha").value;

    const estado = document.getElementById("estado");

    const barra = document.querySelector(".barra");

    const progreso = document.getElementById("progreso");

    // Reiniciar barra
    progreso.style.width = "0%";
    barra.style.display = "none";

    if (fecha !== fechaCorrecta) {

        estado.style.color = "red";
        estado.innerHTML = "❌ Fecha incorrecta<br>Ese recuerdo aún no abre este universo.";

        if (navigator.vibrate) {
            navigator.vibrate(200);
        }

        return;
    }

    estado.style.color = "cyan";
    estado.innerHTML = "🔍 Verificando memoria...";

    barra.style.display = "block";

    let porcentaje = 0;

    const intervalo = setInterval(() => {

        porcentaje++;

        progreso.style.width = porcentaje + "%";

        if (porcentaje >= 100) {

            clearInterval(intervalo);

            estado.innerHTML = "✅ Acceso autorizado<br>Bienvenida al universo ❤️";

            setTimeout(() => {
                window.location.href = "universo.html";
            }, 2000);

        }

    }, 40);

}