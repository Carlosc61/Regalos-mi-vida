//------------------------------------
// TEXTO ESCRIBIÉNDOSE
//------------------------------------

const titulo="Nuestro Universo";

const subtitulo="Hay universos que solo pueden abrirse con un recuerdo...";

let i=0;

let j=0;

function escribirTitulo(){

if(i<titulo.length){

document.getElementById("titulo").innerHTML+=titulo.charAt(i);

i++;

setTimeout(escribirTitulo,90);

}else{

escribirSub();

}

}

function escribirSub(){

if(j<subtitulo.length){

document.getElementById("subtitulo").innerHTML+=subtitulo.charAt(j);

j++;

setTimeout(escribirSub,35);

}

}

escribirTitulo();


//------------------------------------
// ESTRELLAS
//------------------------------------

const canvas=document.getElementById("stars");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let estrellas=[];

for(let i=0;i<500;i++){

estrellas.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

v:Math.random()*0.5+0.2

});

}

function animar(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

for(let s of estrellas){

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

s.y+=s.v;

if(s.y>canvas.height){

s.y=0;

s.x=Math.random()*canvas.width;

}

}

requestAnimationFrame(animar);

}

animar();


//------------------------------------
// BOTÓN
//------------------------------------

document.getElementById("btn").onclick=function(){

document.body.style.transition="2s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href="login.html";

},2000);

}

window.onresize=()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}