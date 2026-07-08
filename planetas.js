import * as THREE from "https://unpkg.com/three@0.166.1/build/three.module.js";

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

camera.position.z=20;

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

//--------------------------------
// LUCES
//--------------------------------

const light=new THREE.PointLight(0xffffff,4);

light.position.set(20,20,20);

scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff,.4));

//--------------------------------
// ESTRELLAS
//--------------------------------

const estrellas=new THREE.BufferGeometry();

const vertices=[];

for(let i=0;i<5000;i++){

vertices.push(

(Math.random()-0.5)*500,

(Math.random()-0.5)*500,

(Math.random()-0.5)*500

);

}

estrellas.setAttribute(

'position',

new THREE.Float32BufferAttribute(vertices,3)

);

const materialEstrellas=new THREE.PointsMaterial({

color:0xffffff,

size:.8

});

const cielo=new THREE.Points(estrellas,materialEstrellas);

scene.add(cielo);

//--------------------------------
// PLANETAS
//--------------------------------

function crearPlaneta(color,x,nombre){

const geo=new THREE.SphereGeometry(2,64,64);

const mat=new THREE.MeshStandardMaterial({

color:color

});

const planeta=new THREE.Mesh(geo,mat);

planeta.position.x=x;

planeta.userData.nombre=nombre;

scene.add(planeta);

return planeta;

}

const p1=crearPlaneta(0x3498db,-15,"Nuestro inicio");

const p2=crearPlaneta(0x9b59b6,-5,"Lo que admiro de ti");

const p3=crearPlaneta(0xe67e22,5,"Nuestros recuerdos");

const p4=crearPlaneta(0x2ecc71,15,"Carta final");

//--------------------------------
// RAYCAST
//--------------------------------

const raycaster=new THREE.Raycaster();

const mouse=new THREE.Vector2();

window.addEventListener("click",e=>{

mouse.x=(e.clientX/window.innerWidth)*2-1;

mouse.y=-(e.clientY/window.innerHeight)*2+1;

raycaster.setFromCamera(mouse,camera);

const hit=raycaster.intersectObjects(scene.children);

if(hit.length>0){

const objeto=hit[0].object;

if(objeto.userData.nombre){

alert(objeto.userData.nombre);

}

}

});

//--------------------------------
// ANIMACIÓN
//--------------------------------

function animate(){

requestAnimationFrame(animate);

cielo.rotation.y+=0.0005;

p1.rotation.y+=0.01;

p2.rotation.y+=0.01;

p3.rotation.y+=0.01;

p4.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});