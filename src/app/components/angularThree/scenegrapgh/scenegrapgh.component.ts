import { AfterViewInit, Component, computed, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { injectBeforeRender, injectLoader } from 'angular-three';
import { NgtsMeshDistortMaterial } from 'angular-three-soba/materials';
import {  Mesh, SphereGeometry } from 'three';


@Component({
  selector:'app-3d-sphere',
   imports: [NgtsMeshDistortMaterial],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scenegrapgh.component.html',
  styleUrl: './scenegrapgh.component.css'
})
export class SceneGraph implements AfterViewInit{

  //Getting Reference with viewChild
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor(){
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      let geometry = new SphereGeometry(); // [1, 1, 1] box
      mesh.geometry = geometry;
      
      // later when we want a bigger box
      mesh.geometry.dispose(); // dispose old box
      // // construct new box
      // geometry = new SphereGeometry(2); // [2, 2, 2] box
      mesh.geometry = geometry;
    });
  }



  materialOptions = computed(() => ({

    emissive: '#FFC0CB',
    emissiveIntensity: 0.9,
    metalness: 1,
    radius: 2.4,
    distort: 0.7,
    toneMapped: false,
  }));
  ngAfterViewInit(): void {
    
  }

  hover = false;
  rotation: [number, number, number] = [0, 0, 0];

  rotateCube() {
    // simple 45 deg Y-axis rotation
    // this.rotation = [
    //   this.rotation[0],
    //   this.rotation[1] + Math.PI / 4,
    //   this.rotation[2],
    // ];
  }

  protected readonly Math = Math;

}
