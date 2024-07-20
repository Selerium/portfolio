import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import './style.scss';
import * as THREE from 'three';
import { render } from 'sass';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(0, 0, 10);
scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = 0;
renderer.domElement.style.opacity = 0;
renderer.domElement.style.transition = 'all ease 300ms';

camera.position.z = 3;

const whiteMat = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0, emissive: 0xe0e0e0, metalness: 1 } );
const blackMat = new THREE.MeshStandardMaterial( { color: 0x000000, specular: 0x050505, shininess: 100 } );

const outerGeo = new THREE.PlaneGeometry( 1.5, 2.25 );
const innerGeo = new THREE.PlaneGeometry( 1.5 * 0.9, 2 * 0.9 );
const backside = new THREE.Mesh ( outerGeo.clone(), blackMat );
backside.position.set(0, 0, -0.001);
const outer = new THREE.Mesh ( outerGeo, whiteMat );
outer.position.set(0, 0, 0);
const czone = new THREE.Mesh ( innerGeo, new THREE.MeshStandardMaterial( { lightMap: new THREE.TextureLoader().load('thumbnails/czone-thumb.png'), map: new THREE.TextureLoader().load('thumbnails/czone-thumb.png'), roughness: 0, metalness: 0.4 } ) );
czone.position.set(0, 0.07 * 2, 0.01);
const junia = new THREE.Mesh ( innerGeo, new THREE.MeshStandardMaterial( { lightMap: new THREE.TextureLoader().load('thumbnails/junia-thumb.png'), map: new THREE.TextureLoader().load('thumbnails/junia-thumb.png'), roughness: 0, metalness: 0.4 } ) );
junia.position.set(0, 0.07 * 2, 0.01);
const comingSoon = new THREE.Mesh ( innerGeo, new THREE.MeshStandardMaterial( { lightMap: new THREE.TextureLoader().load('thumbnails/coming-soon.png'), map: new THREE.TextureLoader().load('thumbnails/coming-soon.png'), roughness: 0, metalness: 0.4 } ) );
comingSoon.position.set(0, 0.07 * 2, 0.01);
const inner = new THREE.Mesh ( innerGeo, blackMat );
inner.position.set(0, 0.07 * 2, 0.01);

const card1 = new THREE.Group ();
outer.material.side = THREE.DoubleSide;
inner.material.side = THREE.DoubleSide;
card1.add(backside);
card1.add(outer);

const card2 = card1.clone( true );
const card3 = card1.clone( true );

card1.position.set(-2, -0.3, 0);
card1.add(czone);
card2.position.set(0, -0.3, 0);
// card2.add(backside.clone());
card2.add(junia);
card3.position.set(2, -0.3, 0);
card3.add(comingSoon);

scene.add (card1);
scene.add (card2);
scene.add (card3);

let mousePress = false, rotateLeft = false, rotateRight = false, rotateUp = false, rotateDown = false;
let mouseX = 0, mouseY = 0;
let chosen = undefined, amountRotatedX = 0, amountRotatedY = 0;
let rotation = 0.11;

function animate() {
  raycaster.setFromCamera( pointer, camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObject( scene );
  if (intersects.length > 0 && renderer.domElement.style.opacity == 1)
      document.body.style.cursor = 'pointer';
  else
    document.body.style.cursor = 'default';
  if (!mousePress && intersects[0])
    chosen = intersects[0];
  else if (!mousePress)
    chosen = undefined;
  if (mousePress && chosen != undefined) {
    document.querySelector('canvas').requestPointerLock();
    if (rotateLeft) {
      chosen.object.parent.rotateY(-rotation);
      amountRotatedX -= rotation
      rotateLeft = false;
    }
    if (rotateRight) {
      chosen.object.parent.rotateY(rotation);
      amountRotatedX += rotation
      rotateRight = false;
    }
  }
	renderer.render( scene, camera );
}

function onMouseMove( event ) {
  pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  // camera.position.set(pointer.x / 50, pointer.y / 50, 3);

  if (!mousePress || mouseX == event.movementX)
    return;
  rotateLeft = (event.movementX < 0);
  rotateRight = (event.movementX > 0);

  mouseX = event.movementX;
  mouseY = event.movementY;
}

window.addEventListener( 'mousedown', () => { 
  mousePress = true;
});
window.addEventListener( 'mousemove', onMouseMove );
window.addEventListener( 'mouseup', () => {
  mousePress = false;
  document.exitPointerLock();
  chosen = undefined;
});

renderer.setAnimationLoop( animate );

document.querySelector('#app').innerHTML = `
  <header>
    <h1 id="adi"><a href="/">adi.</a></h1>
    <div class="contact-links">
      <a target="_blank" rel="nofollow" href="https://wa.me/971555532396?text=[PORTFOLIO]%20I'm%20looking%20for%20a%20web%20dev/"><img id="whatsapp" src="./contact-icons/whatsapp logo.png"></a>
      <a target="_blank" rel="nofollow" href="mailto:johnadithya008@gmail.com"><img id="mail" src="./contact-icons/mail logo.png"></a>
      <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/johnadi/"><img id="linkedin" src="./contact-icons/linkedin logo.png"></a>
      <a target="_blank" rel="nofollow" href="https://www.github.com/Selerium/"><img id="github" src="./contact-icons/github logo.png"></a>
    </div>
  </header>
  <div id="gradient-layer"></div>
  <main>
    <div class="hero-section">
    <h1>hi, i'm john adithya.</h1>
    <p>Welcome to my digital <s>footprint</s> portfolio.</p>
    <button id="change-text">my work so far</button>
    </div>
    <div class="info-section">
      <h1>projects i've worked on</h1>
      <div class="resume">
        <button id="back">back</button>
        <button id="about-me">about me</button>
        <h1><a href="CV_JohnAdi.pdf" download>my resume</a></h1>
      </div>
    </div>
  </main>
    `

function changeBackground(color) {
  document.getElementById('gradient-layer').style.backgroundImage = color;
  document.getElementById('gradient-layer').style.opacity = 1;
}

// function resetBackground() {
//   document.getElementById('gradient-layer').style.opacity = 0;
//   setTimeout(() => {
//     document.getElementById('gradient-layer').style.backgroundImage = 'linear-gradient(192deg, #68526e, #13002b)';
//   }, 150);
// }

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  document.querySelector('#adi').addEventListener('mouseenter', () => {
    document.getElementById('gradient-layer').style.backgroundImage = 'linear-gradient(192deg, #67637a, #16151d)';
    document.getElementById('gradient-layer').style.opacity = 1;
  });

  document.querySelector('#whatsapp').addEventListener('mouseenter', () => changeBackground('linear-gradient(192deg, #618d6c, #01350d)'));
  // document.querySelector('#whatsapp').addEventListener('mouseleave', () => resetBackground());
  
  document.querySelector('#mail').addEventListener('mouseenter', () => changeBackground('linear-gradient(192deg, #739b99, #003836)'));
  // document.querySelector('#mail').addEventListener('mouseleave', () => resetBackground());
  
  document.querySelector('#linkedin').addEventListener('mouseenter', () => changeBackground('linear-gradient(192deg, #717c94, #01102e)'))
  // document.querySelector('#linkedin').addEventListener('mouseleave', () => resetBackground());
  
  document.querySelector('#github').addEventListener('mouseenter', () => changeBackground('linear-gradient(192deg, #81a584, #013005)'));
  // document.querySelector('#github').addEventListener('mouseleave', () => resetBackground());
  
  document.getElementById('change-text').addEventListener('mouseenter', () => {
    document.getElementById('gradient-layer').style.opacity = 1;
    changeBackground('linear-gradient(192deg, #68526e, #13002b)');
  });
  
  document.getElementById('change-text').addEventListener('mousedown', () => {
    document.querySelector('.hero-section').style.opacity = 0;
    document.querySelector('.info-section').style.opacity = 1;
    renderer.domElement.style.opacity = 1;
    resetButton.style.opacity = 1;
    resetButton.style.bottom = "2rem";
  });

  document.querySelector('#about-me').addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight);
  });

  document.querySelector('#back').addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize, false );