import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SceneGraph } from '../../angularThree/scenegrapgh/scenegrapgh.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-bubbleshape',
  imports: [NgtCanvas],
  templateUrl: './bubbleshape.component.html',
  styleUrl: './bubbleshape.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BubbleshapeComponent {
  protected sceneGraph = SceneGraph;
}
