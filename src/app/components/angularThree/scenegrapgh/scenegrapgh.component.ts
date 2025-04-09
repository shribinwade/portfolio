import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import { Mesh } from 'three';
import { NgtsMeshDistortMaterial } from 'angular-three-soba/materials';

@Component({
   imports: [NgtsMeshDistortMaterial],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './scenegrapgh.component.html',
  styleUrl: './scenegrapgh.component.css'
})
export class SceneGraph {

  //Getting Reference with viewChild
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');

  constructor(){
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
    });
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
