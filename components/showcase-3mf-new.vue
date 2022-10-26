<script setup>
import { ref, onMounted, reactive, render } from 'vue';
import { Box, Camera, LambertMaterial, PointLight, AmbientLight, Renderer, Scene, Group, ThreemfModel } from 'troisjs';
import * as THREE from 'three';

import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';

const props = defineProps({
  model: {
    type: String,
    required: true,
  },
  position: {
    type: Array,
    default: () => [0, 0, 0],
  },
  rotation: {
    type: Array,
    default: () => [0, 0, 0],
  },
  scale: {
    type: Number,
    default: () => 1,
  },
  width: {
    type: Number,
    required: false,
    default: () => 500,
  },
  height: {
    type: Number,
    required: false,
    default: () => 500,
  },
  brightness: {
    type: Number,
    required: false,
    default: () => 1.5,
  },
  color: {
    type: String,
    required: false,
    default: () => '#ffffff',
  },
  opacity: {
    type: Number,
    required: false,
    default: () => 1,
  },
});

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const sceneRef = ref(null);
const rendererRef = ref(null);

const modelGear = ref(null)

function generateMaterial(material) {
  let options = {
    color: new THREE.Color(...material.color),
    wireframe: material.wireframe,
  };
  switch (material.type) {
    case 'basic':
      return new THREE.MeshBasicMaterial(options);
    case 'lambert':
      return new THREE.MeshLambertMaterial(options);
    case 'phong':
      return new THREE.MeshPhongMaterial(options);
    case 'standard':
      return new THREE.MeshStandardMaterial(options);
    case 'physical':
      return new THREE.MeshPhysicalMaterial(options);
    case 'toon':
      return new THREE.MeshToonMaterial(options);
    case 'normal':
      return new THREE.MeshNormalMaterial(options);
    case 'depth':
      return new THREE.MeshDepthMaterial(options);
    case 'distance':
      return new THREE.MeshDistanceMaterial(options);
    case 'matcap':
      return new THREE.MeshMatcapMaterial(options);
  }
}

let onReady = ref(null);

onMounted(async () => {

  console.log(`mounted`)
  
  const scene = sceneRef.value.scene
  const renderer = rendererRef.value

  onReady.value = async (model) => {

    console.log(`onLoaded`)
    console.log(`model:`, model)
    model.traverse(o => {
        if (o.isMesh){
            // handle both multiple and single materials
            const asArray = Array.isArray(o.material) ? o.material : [o.material]
            // 0 works for matte materials - change as needed
            asArray.forEach(mat => {
              mat.metalness = 0;
              console.log(`mat:`, mat)
              if (props.opacity < 1) {
                mat.transparent = true;
                mat.opacity = props.opacity;
              }
              mat.color = new THREE.Color(props.color);
            })
        }
    })
    // scene.add(modelGear.value)
    renderer.onBeforeRender(() => {
      // cameraPosition.phi = cameraPosition.phi < 360 ? cameraPosition.phi + 1 : 0;
      // // use trigonometry to calculate x and y
      // cameraPosition.x = 10 * Math.sin((cameraPosition.phi * Math.PI) / 180);
      // console.log(`cameraPosition.y:`, cameraPosition.y)
      // cameraPosition.y = 10 * Math.cos((cameraPosition.phi * Math.PI) / 180);
      // console.log(`cameraPosition.y:`, cameraPosition.y)
      // cameraPosition.x = cameraPosition.x < 20 ? cameraPosition.x + 0.1 : 0;
  
      // gearRotation.phi += 0.01;
      // gearRotation.theta += 0.01;
      // gearRotation.x = gearRotation.x * Math.cos(gearRotation.phi) + gearRotation.y * Math.sin(gearRotation.phi);
      // gearRotation.y = -gearRotation.x * Math.sin(gearRotation.phi) + gearRotation.y * Math.cos(gearRotation.phi);
      // gearRotation.z = gearRotation.z;
  
      // console.log(`model.rotateX:`, model.rotateX)
      model.rotateZ(0.005)
      
    });
    // setInterval(() => {
    //   console.log(`cameraPosition:`, cameraPosition)
    //   cameraPosition.x = cameraPosition.x < 20 ? cameraPosition.x + 1 : 0;
    //   console.log(`updated position to ${cameraPosition.x}`)
    // }, 100);
  
    console.log(`model:`, model)

  }
    
})

</script>


<template>
  <div class="p-0">
    <Renderer ref="rendererRef" :width="props.width.toString()" :height="props.height.toString()" :alpha="true">
      <Camera :position="{ z: 50 }" :look-at="{x: 0, y: 0, z: 0}" :fov="50" />
      <Scene ref="sceneRef">
        <AmbientLight :color="`#ffffff`" :intensity="props.brightness" />
        <PointLight :position="{ x: 100, y: 100, z: 100 }" :intensity="1.5" :cast-shadow="true" />
        
        <ThreemfModel
          ref="modelGear"
          :src="props.model"
          :scale="{ x: props.scale, y: props.scale, z: props.scale }"
          :position="{ x: props.position[0], y: props.position[1], z: props.position[2] }"
          :rotation="{ x: props.rotation[0], y: props.rotation[1], z: props.rotation[2] }"
          @load="onReady"
          />
            <!-- @load="onReady"
            @progress="onProgress"
            @error="onError" -->

      </Scene>
  </Renderer>
  </div>
</template>
