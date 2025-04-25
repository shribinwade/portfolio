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
extend({ OrbitControls });
@Component({
  standalone: true,
  imports: [NgtsEnvironment, NgtsContactShadows, NgtArgs],
  selector: 'app-circuit-board3d',
  templateUrl: './circuit-board3d.component.html',
  styleUrl: './circuit-board3d.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CircuitBoard3dComponent {
  protected readonly Math = Math;

  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  orbitControls = viewChild.required<ElementRef<OrbitControls>>('orbirControls');

  constructor() {
    const v = new Vector3();
    injectBeforeRender(({ delta,camera,clock  }) => {
      const t = clock.elapsedTime;
      const orbitControls = this.orbitControls()?.nativeElement;
      camera.position.lerp(v.set(Math.sin(t / 5), 1, 6 + Math.cos(t / 5) / 2), 0.05);
      if (orbitControls) {
        orbitControls.update();
      
      }
      // const mesh = this.meshRef().nativeElement;
      // mesh.rotation.y += delta * 0.5;
    })
  }

  scale = input(1);
  gltf = injectLoader(() => GLTFLoader, () => `java/scene.gltf`);
  model = computed(() => {
    const gltf = this.gltf();
    if (!gltf) return null;
    return gltf.scene;
  })

  private store = injectStore();
  protected camera = this.store.select('camera');
  protected glDomElement = this.store.select('gl', 'domElement');

  ngAfterViewInit(): void {
    this.camera().position.set( 40, 20, 20);
  }
}


