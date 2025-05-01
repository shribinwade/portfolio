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
      img: 'dataXplode.png',
      title: "DataXplode",
      dec: "Market insight and strategic intelligence tool, It Utilize AI-driven analysis and optimize product positioning",
      techStack:"Angular 17, Angular Material, Bootstrap, Spring boot, Postgres, FastAPI , Selenium with python, JWT",
      link: 'https://dataxplode.com'
    },
    { 
      id: 2,
      img: 'kissanYodha.png',
      title: "Kisan Yodha - Empowering Farmers with AI",
      techStack:"Flutter, Material UI, NodeJS, Express JS, Postgres, JWT",
      dec: "Kisan Yodha is a powerful and easy-to-use mobile app built for farmers, traders, and agri-entrepreneurs. Designed to support smart farming decisions, Kisan Yodha offers a suite of tools powered by AI to help users maximize productivity and profits.",
      link: 'https://github.com/shribinwade/KisanYodhaApp'
    },

    { 
      id: 3,
      img: 'cms.png',
      title: "CRM System",
      dec: "Its primary goal is to help café owners manage customer relationships, streamline orders, track feedback, promote loyalty programs, and gain insights into customer preferences and trends. The system provides a centralized platform to manage customers, employees, inventory, promotions, and sales analytics.",
      techStack:"Angular 9, Spring boot, Postgres, Angular Material",
      link: 'http://github.com/shribinwade/CMS-Project'
    },
    { 
      id: 4,
      img: 'portfolioImg.png',
      title: "3D Animated Portfolio Project",
      techStack:"Angular 17, Angular Material, Bootstrap, Spring boot, Postgres, FastAPI , Selenium with python, JWT",
      dec: "Developed Portfolio website using Angular 19, Tailwind 4, Angular animations, GSAP, Three.js, Js Mail",
      link: '/'
    },
    // { 
    //   id: 4,
    //   img: 'portfolioImg.png',
    //   title: "Animated Project 3",
    //   techStack:"Angular 17, Angular Material, Bootstrap, Spring boot, Postgres, FastAPI , Selenium with python, JWT",
    //   dec: "Description Description Animated AnimatedAnimatedAnimated Animated Animated Animated ProjectAnimated Project 3",
    //   link: '/'
    // },
  ];

  constructor(private cdr: ChangeDetectorRef) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.initHorizontalScroll();
    this.cdr.detectChanges();
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
