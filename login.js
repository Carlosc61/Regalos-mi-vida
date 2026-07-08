const fechaCorrecta = "2020/03/03"; // <-- Cambia por tu fecha

function verificar(){

const fecha=document.getElementById("fecha").value;

const estado=document.getElementById("estado");

const barra=document.querySelector(".barra");

const progreso=document.getElementById("progreso");

if(fecha!==fechaCorrecta){

estado.style.color="red";

estado.innerHTML="❌ Fecha incorrecta<br>Ese recuerdo aún no abre este universo.";

navigator.vibrate?.(200);

return;

}

estado.style.color="cyan";

estado.innerHTML="Verificando memoria...";

barra.style.display="block";

let porcentaje=0;

let intervalo=setInterval(()=>{

porcentaje++;

progreso.style.width=porcentaje+"%";

if(porcentaje>=100){

clearInterval(intervalo);

estado.innerHTML="✅ Acceso autorizado<br>Bienvenida al universo ❤️";

setTimeout(()=>{

window.location.href="universo.html";

},2000);

}

},40);

}