import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { IModel } from '../types/IModel';

export default class Scene {
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera: THREE.PerspectiveCamera;
    controls: OrbitControls;

    constructor(canvasRef: HTMLCanvasElement) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color("#2e2e2e");
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvasRef,
            antialias: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.update();
    }

    update() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.update.bind(this));
    }

    addModel(model: IModel) {
        const loader = new GLTFLoader();
        loader.load(model.url, (gltf: GLTF) => { this.scene.add(gltf.scene) }, undefined, (err) => {
            console.log(err);
        })
    }
}