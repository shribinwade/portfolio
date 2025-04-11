import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { extend, NgtCanvas } from 'angular-three';
import { SceneGraph } from '../scenegrapgh/scenegrapgh.component';
import * as THREE from 'three';
import { NgtsMeshDistortMaterial } from 'angular-three-soba/materials';

 
extend(THREE);

@Component({
  selector: 'app-test3d',
  standalone: true,
  imports: [],
  templateUrl: './test3d.component.html',
  styleUrl: './test3d.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Test3dComponent {
  // protected sceneGraph = SceneGraph;

}
