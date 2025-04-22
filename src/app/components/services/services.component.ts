import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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
gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgtCanvas,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('serviceInAnimation', [
       transition(':enter',[
         query('*',[
          style({opacity: 0, transform: 'translateX(-20px)'}),
          stagger(200, animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
         ],
         { optional: true } 
        )
       ])
    ])
  ]
})
export class ServicesComponent implements OnInit{
  protected sceneGraph = MacModelComponent;

  @ViewChild('serviceSection',{static:true}) serviceSection!: ElementRef<HTMLDivElement>;
  @ViewChild('left',{static:true}) left!: ElementRef<HTMLDivElement>;
  @ViewChild('right',{static:true}) right!: ElementRef<HTMLDivElement>;

  
  constructor(@Inject(DOCUMENT) private document:Document){}

  ngOnInit(): void {
   this.initScrollAnimation();
    this.initialAnimation();
  }

  initScrollAnimation():void{
    //  let ti= gsap.timeline({
    //      scrollTrigger: {
    //       trigger: this.serviceSection.nativeElement,
    //       toggleActions: "play pause reverse pause",
    //       scrub: true,
    //       markers: true,
    //       start: 'top center',
        

    //      } as gsap.plugins.ScrollTriggerInstanceVars,
         
    //    })
    //    ti.to(this.serviceSection.nativeElement,{
        
    //     opacity:1,
    //     x: 0
    //    })

       gsap.to(this.left.nativeElement,{
        scrollTrigger: {
          trigger: this.left.nativeElement,
          start: 'top center',
          end: 'center center',
          markers: false,
          scrub: 4,
          toggleActions: 'restart none  none'
        },
        x: 0,
        opacity: 1,
        duration:1
      
      
       })

       gsap.to(this.right.nativeElement,{
        scrollTrigger: {
          trigger: this.right.nativeElement,
          start: 'top center',
          end: 'center center',
          scrub: 4,
          markers: false,
          toggleActions: 'restart none  none'
        },
        x: 0,
        opacity: 1,
        duration:1
       })

  }

  initialAnimation():void{

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
