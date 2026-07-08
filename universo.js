const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const estrellas = [];

for(let i=0;i<1200;i++){

estrellas.push({

x:(Math.random()-0.5)*canvas.width,

y:(Math.random()-0.5)*canvas.height,

z:Math.random()*canvas.width

});

}

function universo(){

ctx.fillStyle="black";

ctx.fillRect(0,0,canvas.width,canvas.height);

for(let e of estrellas){

e.z-=12;

if(e.z<=1){

e.z=canvas.width;

}

const x=(e.x/e.z)*900+canvas.width/2;
const y=(e.y/e.z)*900+canvas.height/2;

const r=(1-e.z/canvas.width)*4;

ctx.beginPath();
ctx.fillStyle="white";
ctx.arc(x,y,r,0,Math.PI*2);
ctx.fill();

}

requestAnimationFrame(universo);

}

universo();

const frases=[

"Todo comenzó con un simple 'Hola'.",

"Sin darnos cuenta...",
"estábamos creando nuestro propio universo.",

"Cada recuerdo...",
"es una estrella.",

"Cada sonrisa...",
"una galaxia.",

"Y este...",
"es solo el comienzo."

];

let indice=0;

const mensaje=document.getElementById("mensaje");
const texto=document.getElementById("texto");

setTimeout(()=>{

texto.style.opacity=1;

escribir();

},2000);

function escribir(){

if(indice>=frases.length){

setTimeout(()=>{

window.location.href="planetas.html";

},5000);

return;

}

mensaje.innerHTML=frases[indice];

indice++;

setTimeout(escribir,2500);

}