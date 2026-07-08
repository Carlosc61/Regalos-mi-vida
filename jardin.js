// =======================================
// JARDÍN ROMÁNTICO 3D
// Archivo: jardin.js
// =======================================

// Escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020312);

// Cámara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0,8,25);

// Render
const renderer = new THREE.WebGLRenderer({
    antialias:true
});

renderer.setSize(window.innerWidth,window.innerHeight);
renderer.shadowMap.enabled=true;

document.getElementById("escena").appendChild(renderer.domElement);

// =======================
// LUCES
// =======================

const ambient = new THREE.AmbientLight(0x8aa9ff,1.2);
scene.add(ambient);

const moonLight = new THREE.DirectionalLight(0xffffff,1.8);
moonLight.position.set(20,30,10);
moonLight.castShadow=true;
scene.add(moonLight);

// =======================
// LUNA
// =======================

const moonGeometry=new THREE.SphereGeometry(3,64,64);

const moonMaterial=new THREE.MeshStandardMaterial({

    color:0xffffdd,
    emissive:0xffffcc,
    emissiveIntensity:1

});

const moon=new THREE.Mesh(moonGeometry,moonMaterial);

moon.position.set(-18,22,-35);

scene.add(moon);

// brillo

const glow=new THREE.PointLight(0xffffff,80,150);

glow.position.copy(moon.position);

scene.add(glow);

// =======================
// CÉSPED
// =======================

const grassGeometry=new THREE.PlaneGeometry(250,250);

const grassMaterial=new THREE.MeshStandardMaterial({

    color:0x114d1b

});

const grass=new THREE.Mesh(grassGeometry,grassMaterial);

grass.rotation.x=-Math.PI/2;

grass.receiveShadow=true;

scene.add(grass);

// =======================
// ESTRELLAS
// =======================

const starsGeometry=new THREE.BufferGeometry();

const starVertices=[];

for(let i=0;i<4000;i++){

    const x=(Math.random()-0.5)*500;

    const y=Math.random()*250;

    const z=(Math.random()-0.5)*500;

    starVertices.push(x,y,z);

}

starsGeometry.setAttribute(

'position',

new THREE.Float32BufferAttribute(starVertices,3)

);

const starsMaterial=new THREE.PointsMaterial({

    color:0xffffff,
    size:0.8

});

const stars=new THREE.Points(starsGeometry,starsMaterial);

scene.add(stars);

// =======================
// FLORES
// =======================

function crearFlor(x,z,color){

    // tallo

    const tallo=new THREE.Mesh(

        new THREE.CylinderGeometry(.05,.05,.8),

        new THREE.MeshStandardMaterial({

            color:0x00aa33

        })

    );

    tallo.position.set(x,.4,z);

    scene.add(tallo);

    // pétalos

    const petalo=new THREE.Mesh(

        new THREE.SphereGeometry(.22,16,16),

        new THREE.MeshStandardMaterial({

            color:color

        })

    );

    petalo.position.set(x,.9,z);

    scene.add(petalo);

}

for(let i=0;i<350;i++){

    const x=(Math.random()-0.5)*120;

    const z=(Math.random()-0.5)*120;

    const colores=[

        0xff69b4,
        0xffffff,
        0xff66ff,
        0xffff66,
        0xff9999

    ];

    crearFlor(

        x,
        z,
        colores[Math.floor(Math.random()*colores.length)]

    );

}

// =======================
// MOVIMIENTO DE CÁMARA
// =======================

let angle=0;

function moverCamara(){

    angle+=0.001;

    camera.position.x=Math.sin(angle)*25;

    camera.position.z=Math.cos(angle)*25;

    camera.lookAt(0,0,0);

}

// =======================
// LOADER
// =======================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").classList.add("oculto");

},3200);

});

// =======================
// BOTÓN
// =======================

const boton=document.getElementById("btnComenzar");

boton.addEventListener("click",()=>{

document.getElementById("mensaje").style.display="none";

const musica=document.getElementById("musica");

if(musica){

musica.play().catch(()=>{});

}

});

// =======================
// ANIMACIÓN
// =======================

function animate(){

requestAnimationFrame(animate);

stars.rotation.y+=0.0002;

moon.rotation.y+=0.002;

moverCamara();

renderer.render(scene,camera);

}

animate();

// =======================
// RESPONSIVE
// =======================

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

});

