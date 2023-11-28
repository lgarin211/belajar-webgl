/*
    - scene
      - lingkungan 3D (3D environment)
        - objek 3D (3D object)
    - camera
    - renderer
*/

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);
/*
    - fov (field of view)
    - aspect ratio
    - near clipping plane
    - far clipping plane
*/
var renderer = new THREE.WebGLRenderer();

var box = new THREE.BoxGeometry(1, 1, 1);
var boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var boxMesh = new THREE.Mesh(box, boxMat);

scene.add(boxMesh);
camera.position.z = 5;

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setSize(scene, camera);