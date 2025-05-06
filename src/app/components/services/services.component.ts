import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, OnInit, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import { MacModelComponent } from './threeModelComponents/mac-model/mac-model.component';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query
} from '@angular/animations';
import { log } from 'three/src/nodes/TSL.js';

import { CircuitBoard3dComponent } from './threeModelComponents/circuit-board3d/circuit-board3d.component';
import { UiUx3dComponent } from './threeModelComponents/ui-ux3d/ui-ux3d.component';
import { InfinityComponent } from './threeModelComponents/infinity/infinity.component';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgtCanvas,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServicesComponent implements OnInit, AfterViewInit{

  @ViewChild('serviceSection',{static:true}) serviceSection!: ElementRef<HTMLDivElement>;
  @ViewChild('left',{static:true}) left!: ElementRef<HTMLDivElement>;
  @ViewChild('right',{static:true}) right!: ElementRef<HTMLDivElement>;
  // @ViewChildren('sService') service!:QueryList<ElementRef>
  @ViewChildren('serviceBox') serviceBoxes!: QueryList<ElementRef>;
  @ViewChild('serviceWrapper') serviceWrapper!: ElementRef;

  protected sceneGraph:any= MacModelComponent;
  
  constructor(@Inject(DOCUMENT) private document:Document){}
 
  protected serviceID:number=1;

  setCurrentServiceID(arg:number){
    if(arg===1){
      this.serviceID = arg;
      this.sceneGraph = MacModelComponent
    }
    if(arg ===2 ){
      this.serviceID = arg;
      this.sceneGraph = CircuitBoard3dComponent
    }
    if(arg ===3 ){
      this.serviceID = arg;
      this.sceneGraph = UiUx3dComponent
    }
    if(arg === 4 ){
      this.serviceID = arg;
      this.sceneGraph = InfinityComponent
    }

  }

  ngAfterViewInit(): void {

    const boxes = this.serviceBoxes.map(el => el.nativeElement);

    gsap.from(boxes, {
      scrollTrigger: {
        trigger: boxes,
        start: 'top 81.5%',
        end: 'bottom 81.5%',
        toggleActions: 'restart none none reverse',
        markers: false,
        // scrub:1
      },
      opacity: 0,
      x: -100,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out'
    });

    gsap.from(this.right.nativeElement,{
      scrollTrigger: {
        trigger: this.right.nativeElement,
        start: 'top center',
        end: 'center center',
     
        // markers: true,
        //onEnter, onLeave, onEnterBack, onLeaveBack
        toggleActions: 'restart none none reverse'
      },
      x: 100,
      opacity: 0,
      y: 50,
      duration:1,
        ease: 'power2.out'
     })

  }

  ngOnInit(): void {

  }

  services = [
    {
      id:1,
      img: "webWhite.svg",
      title: "Web Development",
      counter: 5
    },
    {
      id:2,
      img:"apiWhite.svg",
      title: "System Design",
      counter: 5,
    },
    {
      id:3,
      img:"uiux.svg",
      title: "UI/UX",
      counter: 5,
    },
    {
      id:4,
      img:"dev-ops.svg",
      title: "DevOps",
      counter: 5,
    }
  ]
}
