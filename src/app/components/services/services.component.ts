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
import { MacMiniComponent } from './threeModelComponents/mac-mini/mac-mini.component';
import { CircuitBoard3dComponent } from './threeModelComponents/circuit-board3d/circuit-board3d.component';
import { UiUx3dComponent } from './threeModelComponents/ui-ux3d/ui-ux3d.component';
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgtCanvas,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    // trigger('serviceInAnimation', [
    //    transition(':enter',[
    //      query('*',[
    //       style({opacity: 0, transform: 'translateX(-20px)'}),
    //       stagger(200, animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
    //      ],
    //      { optional: true } 
    //     )
    //    ])
    // ])
  ]

  //   animations: [
  //   trigger('serviceInAnimation', [
  //     state('in', style({transform: 'translateX(0)'})),
  //     transition('void => *', [style({transform: 'translateX(-100%)'}), animate(100)]),
  //     transition('* => void', [animate(100, style({transform: 'translateX(100%)'}))]),
  //   ])
  // ]
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
    if(arg ===3){
      this.serviceID = arg;
      this.sceneGraph = UiUx3dComponent
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
        markers: true,
        // scrub:1
      },
      opacity: 0,
      x: -100,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out'
    });

    // this.service.forEach((service)=>{
    //   console.log("hello")
    //  gsap.from(service.nativeElement,{
    //   opacity:0,
    //   x:-500,
    //   y:-50,
    //   stagger:1,
    //   duration:4,
    //   delay:1,
    //   ease: 'power4.out',
    //   scrollTrigger:{
    //     trigger: service.nativeElement,
    //     start: 'top 81.5%',
    //     // end: 'bottom 81.5%',
    //     toggleActions: 'play none none none',
    //           markers: true,
    //     // scrub: 1,
    //   }
    //  })
    // })

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
   this.initScrollAnimation(); 
  }

  initScrollAnimation():void{

    // gsap.from(this.service.nativeElement,{
      
    //   opacity:0,
    //   x:-500,
    //   y:-100,
    //   // duration:10,
    //   stagger:2,
    //   scrollTrigger: {
    //     trigger: this.service.nativeElement,
    //     start: 'top 85.5%',
    //     end: 'top 25.5%',
    //     markers: true,
    //     scrub: 2,
    //     // toggleActions: 'play pause resume reset',
        
    //   },
    //   // x: 0,
    //   // opacity: 1,
    //   // duration:1
    //  })

  
    
 
      //  gsap.to(this.left.nativeElement,{
      //   scale:1,
      //   opacity:1,
      //   rotate:720,
      //   duration:3,
      //   scrollTrigger: {
      //     trigger: this.left.nativeElement,
      //     start: 'top center',
      //     end: 'center center',
      //     markers: true,
      //     scrub: 2,
      //     toggleActions: 'play none  none'
      //   },
      //   // x: 0,
      //   // opacity: 1,
      //   // duration:1
      //  })


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
    }
  ]


}
