import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import { MacModelComponent } from './threeModelComponents/mac-model/mac-model.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgtCanvas],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent {
  protected sceneGraph = MacModelComponent;
}
