import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { extend, NgtCanvas } from 'angular-three';
import { MacModelComponent } from './threeModelComponents/mac-model/mac-model.component';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { CommonModule, DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgtCanvas,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServicesComponent implements OnInit{
  protected sceneGraph = MacModelComponent;

  @ViewChild('serviceSection',{static:true}) serviceSection!: ElementRef<HTMLDivElement>;
  
  constructor(@Inject(DOCUMENT) private document:Document){}

  ngOnInit(): void {
   this.initScrollAnimation();
    this.initialAnimation();
  }

  initScrollAnimation():void{
     let ti= gsap.timeline({
         scrollTrigger: {
          trigger: this.serviceSection.nativeElement,
          scrub: true,
          markers: false,
          start: '0% center',
          end: 'center center'

         } as gsap.plugins.ScrollTriggerInstanceVars,
         
       })
       ti.to(this.serviceSection.nativeElement,{
        opacity:1,
        x: 0
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
