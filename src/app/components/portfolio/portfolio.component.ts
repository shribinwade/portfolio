import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChildListComponentComponent } from './child-list-component/child-list-component.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ChildListComponentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChild('panelContainer') panelContainer!: ElementRef;
  @ViewChild('pList') pList!: ElementRef;
  @ViewChildren('project') projects!: QueryList<ElementRef>;

  @ViewChild('progressCircle') progressCircle!: ElementRef;

  radius = 70;
  circumference = 2 * Math.PI * this.radius;
  strokeOffset = this.circumference;


  items = [
    { 
      id: 1,
      img: 'portfolioImg.png',
      title: "Animated Project 1",
      dec: "Description Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 1",
      link: '/'
    },
    { 
      id: 2,
      img: 'portfolioImg.png',
      title: "Animated Project 2",
      dec: "Description Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 2",
      link: '/'
    },
    { 
      id: 3,
      img: 'portfolioImg.png',
      title: "Animated Project 3",
      dec: "Description Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 3",
      link: '/'
    },
    { 
      id: 4,
      img: 'portfolioImg.png',
      title: "Animated Project 4",
      dec: "Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 4",
      link: '/'
    },
    { 
      id: 5,
      img: 'portfolioImg.png',
      title: "Project 5",
      dec: "Description Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 5",
      link: '/'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
    // this.initAnimation();
    // this.projects.changes.subscribe(() => {
    //   this.initAnimation();
    // });
  }

  initAnimation(){
    // const boxes = this.projects.map(el => el.nativeElement);
    
    // gsap.from(boxes, {
    //   scrollTrigger: {
    //     trigger: boxes,
    //     start: 'top 81.5%',
    //     end: 'bottom 81.5%',
    //     toggleActions: 'restart none none reverse',
    //     markers: false,
    //   },
    //   opacity: 0,
    //   x: -100,
    //   y: 50,
    //   duration: 1,
    //   stagger: 0.3,
    //   ease: 'power2.out'
    // });

  


  }

  initHorizontalScroll(): void {
    const container = this.panelContainer.nativeElement;
    const list = this.pList.nativeElement;

    const scrollDistance = 1 * list.scrollWidth - window.innerWidth;

    ScrollTrigger.create({
      trigger: container,
      pin: true,
      scrub: 1,
      start: 'top top',
      end: () => `+=${scrollDistance}`,
      onUpdate: self => {
        const progress = self.progress; // 0 to 1
        this.strokeOffset = this.circumference * (1 - progress);
      },
      invalidateOnRefresh: true
    });

    gsap.to(list, {
      x: () => -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });

    // gsap.to(list, {
    //   x: () => -(list.scrollWidth - window.innerWidth ),
    //   ease: 'none',
    //   scrollTrigger: {
    //     trigger: container,
    //     pin: true,
    //     scrub: 1,
    //     start: 'top top',
    //     end: () => `+=${list.scrollWidth - window.innerWidth}`,
    //     invalidateOnRefresh: true
    //   }
    // });
  }

  

  ngOnInit(): void {}
}
