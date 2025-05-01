import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact-svg',
  imports: [],
  templateUrl: './contact-svg.component.html',
  styleUrl: './contact-svg.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContactSVGComponent implements AfterViewInit {

 
  

  ngAfterViewInit(): void {

  }

}
