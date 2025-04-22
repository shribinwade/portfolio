import { CUSTOM_ELEMENTS_SCHEMA, Component, viewChild, ElementRef, ChangeDetectionStrategy, computed, ViewChild, AfterViewInit, input } from '@angular/core';
import { injectStore, extend, injectBeforeRender, injectLoader, NgtArgs, NgtPerspectiveCamera } from 'angular-three';
import * as THREE from 'three';
import { injectGLTF } from 'angular-three-soba/loaders';
import { NgtsCameraControls, NgtsOrbitControls } from 'angular-three-soba/controls';
import { NgtsContactShadows, NgtsEnvironment, NgtsLightformer } from 'angular-three-soba/staging';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three-stdlib';
import { Vector3 } from 'three';

extend(THREE); // everything in THREE is now available
extend({ OrbitControls }); // makes ngt-orbit-controls available

@Component({
  selector: 'app-mac-model',
  standalone: true,
  imports: [NgtsEnvironment, NgtsLightformer, NgtsContactShadows, NgtArgs],
  templateUrl: './mac-model.component.html',
  styleUrl: './mac-model.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MacModelComponent implements AfterViewInit {
  protected readonly Math = Math;
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  orbitControls = viewChild.required<ElementRef<OrbitControls>>('orbirControls');


  @ViewChild('camera') cameraRef!: NgtPerspectiveCamera;
  @ViewChild('orbitControls') controlsRef!: OrbitControls; // Reference to the directive

 


  constructor() {
    const v = new Vector3();
    injectBeforeRender(({ delta,camera,clock  }) => {
      const t = clock.elapsedTime;
      const orbitControls = this.orbitControls()?.nativeElement;
      camera.position.lerp(v.set(Math.sin(t / 5), 2, 6 + Math.cos(t / 5) / 2), 0.05);
      if (orbitControls) {
        orbitControls.update();
      
      }
      // const mesh = this.meshRef().nativeElement;
      // mesh.rotation.y += delta * 0.5;
    })
  }

	scale = input(0.60);
  gltf = injectLoader(() => GLTFLoader, () => `scene.gltf`);
  model = computed(() => {
    const gltf = this.gltf();
    if (!gltf) return null;

    return gltf.scene;
  })

  
  // gltfResult = injectLoader(() => GLTFLoader, () => 'mac.glb');

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');

  ngAfterViewInit(): void {
    this.camera().position.set( 2, 2, 4.1 );
  }

  
}


