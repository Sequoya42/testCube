/**
 * Created by sequoya on 27/05/2017.
 */

/**
 * Scene setup
 */
const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
camera.position.set(0, 0, 10)

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(width, height);
// controls = new THREE.OrbitControls(camera, renderer.domElement)
document.body.appendChild(renderer.domElement);

/**
 * Geometry setup
 */

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});

let test = [];

let COVALUE = 1000000000
for (let i = 0;i<1600;i++) {


    const cube = new THREE.Mesh(geometry, material);

    test.push(cube);
    scene.add(cube);
    const pos3 = Math.floor(Math.random() * 100) - 80;
    const pos = Math.floor(Math.random() * 130) - 60;
    const pos2 = Math.floor(Math.random() * 130) - 60;

    console.log(pos, pos2, pos3)
    cube.position.set(pos2, pos, pos3);
    // cube.position.set(-8, 5, 0)
}

function onFrame() {
    test.forEach((e, i) => {
        e.rotation.x += i / COVALUE;
        e.rotation.y +=  i / COVALUE;
        e.position.x += 0.01;
        e.position.y -= 0.01;
        camera.rotation.x += i / COVALUE;
        camera.rotation.y += i / COVALUE;
        camera.updateProjectionMatrix()
    })

}

(function render() {
    requestAnimationFrame(render);
    onFrame();
    renderer.render(scene, camera);

})();