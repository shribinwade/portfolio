import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { extend, NgtCanvas } from 'angular-three';
import { SceneGraph } from '../../angularThree/scenegrapgh/scenegrapgh.component';
import * as THREE from 'three';
import { CommonModule } from '@angular/common';
extend(THREE);

@Component({
  selector: 'app-bubbleshape',
  standalone: true,
  imports: [NgtCanvas,CommonModule],
  templateUrl: './bubbleshape.component.html',
  styleUrl: './bubbleshape.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BubbleshapeComponent {
  protected sceneGraph = SceneGraph;
}
