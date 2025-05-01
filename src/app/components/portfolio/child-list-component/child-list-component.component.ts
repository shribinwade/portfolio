import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface List {
  id: number,
  img: string,
  title: string,
  dec: string,
  link: string,
  techStack:string
}

@Component({
  selector: 'app-child-list-component',
  standalone: true,
  templateUrl: './child-list-component.component.html',
  styleUrl: './child-list-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildListComponentComponent implements AfterViewInit {
  @Input('list') list!: List;
  @Input() nthIndex: number = 0;
  @Input() projectRef!: string;
  
  @HostBinding('class') get hostClasses(): string {
    switch (this.nthIndex) {
      case 0: return 'first';
      case 1: return 'second';
      case 2: return 'third';
      case 3: return 'fourth';
      case 4: return 'fifth';
      default: return '';
    }
  }

  @ViewChild('project') project!: ElementRef<HTMLDivElement>;

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    const project = this.project.nativeElement;
    
    gsap.from(project, {
      scrollTrigger: {
        trigger: project,
        start: 'top 81.5%',
        end: 'bottom 81.5%',
        toggleActions: 'restart none none reverse',
        markers: false,
        scrub: 1
      },
      opacity: 0,
      stagger:1,
      x: -100,
      y: 50,
      duration: 1,
      ease: 'power2.out'
    });
  }
}
