async function fetchPortfolioItems() {
    const response = await fetch('/api/portfolio');
    const items = await response.json();
    return items;
}

function create3DScene(modelUrl) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);

    const loader = new THREE.GLTFLoader();
    loader.load(modelUrl, function (gltf) {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
}

async function init() {
    const items = await fetchPortfolioItems();
    const container = document.getElementById('portfolio-container');

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'portfolio-item';
        div.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <button onclick="create3DScene('${item.model_url}')">View 3D Model</button>
        `;
        container.appendChild(div);
    });
}

document.addEventListener('DOMContentLoaded', init);