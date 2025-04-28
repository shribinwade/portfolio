import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
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


  items = [
    { 
      id: 1,
      img: 'portfolioImg.png',
      title: "Project 1",
      dec: "Description 1",
      link: '/'
    },
    { 
      id: 2,
      img: 'portfolioImg.png',
      title: "Project 2",
      dec: "Description 2",
      link: '/'
    },
    { 
      id: 3,
      img: 'portfolioImg.png',
      title: "Project 3",
      dec: "Description 3",
      link: '/'
    },
    { 
      id: 4,
      img: 'portfolioImg.png',
      title: "Project 4",
      dec: "Description 4",
      link: '/'
    },
    { 
      id: 5,
      img: 'portfolioImg.png',
      title: "Project 5",
      dec: "Description 5",
      link: '/'
    }
  ];

  constructor() {
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

    gsap.to(list, {
      x: () => -(list.scrollWidth - window.innerWidth ),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${list.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true
      }
    });
  }

  ngOnInit(): void {}
}
