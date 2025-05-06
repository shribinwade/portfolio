import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {FormControl,  FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class ContactComponent implements OnInit,AfterViewInit {

  @ViewChildren('formItemRef', { read: ElementRef }) formItems!: QueryList<ElementRef>;

  @ViewChild('svgPath', { static: true }) svgPath!: ElementRef<SVGPathElement>;
  @ViewChild('box', { static: true }) box!: ElementRef<SVGGElement>;
  @ViewChild('wrapper',{static:true}) wrapper!: ElementRef<HTMLDivElement>
  @ViewChildren('circle',  ) circle!: QueryList<ElementRef>;
  @ViewChild('hair', { static: true }) hair!: ElementRef<SVGPathElement>;

  @ViewChild('wiggleGroup') wiggleGroup!: ElementRef<SVGGElement>;
  @ViewChild('rotateGroup') rotateGroup!: ElementRef<SVGGElement>;

  profileForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder){

  }
  ngAfterViewInit(): void {
    this.formItems.forEach((itemRef, index) => {
      const item = itemRef.nativeElement;
  
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom bottom',
          toggleActions: 'restart none none reverse',
          markers: false,
          
        },
        opacity: 0,
        x: 80,
        y: 10,
        duration: 0.5,
        delay: index * 0.2, // Simulate stagger manually
        ease: 'power2.out'
      });
    });


    const path = this.svgPath.nativeElement;

    // Get total path length
    const pathLength = path.getTotalLength();

    // Set initial dash style
    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();

    // Animate with GSAP
    gsap.to(path, {
      scrollTrigger: {
        trigger: this.wrapper.nativeElement,
        start: 'top 90%',
        end: 'bottom 80%',
        toggleActions: 'restart none none none',
        markers:false,
      },
      strokeDashoffset: 0,
      duration: 10,
      ease: 'linear',
      repeat: -1, 
      repeatDelay:1, 
      yoyo: true
    });

    gsap.to(this.box.nativeElement, {
      x: 10,
      y: 10,
      duration: 4,
      ease: 'linear',
      repeat: -1,
      yoyo: true,
    });

    const hairElement = this.hair.nativeElement;

    gsap.to(hairElement, {
      duration: 3,
      repeat: -1, // Infinite repeat
      yoyo: true, // Reverse on repeat
      ease: "linear",
      fill: "#2f2e41",
      keyframes: [
        { fill: '#2f2e41', duration: 1 },
        { fill: '#ffffff', duration: 1 },
        { fill: '#2f2e41', duration: 1 },
   
      ],

    });


    this.circle.forEach((itemRef, index) => {
      const circleElement = itemRef.nativeElement;
      gsap.to(circleElement, {
        duration: 6,
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse on repeat
        ease: "linear",
        keyframes: [
          { fill: '#c68642', duration: 1.5 },
          { fill: '#8d5524', duration: 1.5 },
          { fill: '#3e1c1b', duration: 1.5 },
          { fill: '#f1c27d', duration: 1.5 },
        ],
        
      });
    });

    const tl = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 4, 
      defaults: { ease: 'easeInOut', duration: 0.03 } 
    });

    // Simulate the motion.g x:[0, -5, 5, ...]
    tl.to(this.wiggleGroup.nativeElement, { x: -5 })
      .to(this.wiggleGroup.nativeElement, { x: 5 })
      .to(this.wiggleGroup.nativeElement, { x: -5 })
      .to(this.wiggleGroup.nativeElement, { x: 5 })
      .to(this.wiggleGroup.nativeElement, { x: 0 })
      .to(this.wiggleGroup.nativeElement, { x: -5 })
      .to(this.wiggleGroup.nativeElement, { x: 5 })
      .to(this.wiggleGroup.nativeElement, { x: -5 })
      .to(this.wiggleGroup.nativeElement, { x: 5 })
      .to(this.wiggleGroup.nativeElement, { x: 0 });
  

      gsap.to(this.rotateGroup.nativeElement, {
        rotation: -5,
        transformOrigin: '150px 100px', // Adjust to match your group's center
        duration: 2,
        ease: 'linear',
        repeat: -1,
        yoyo: true, // acts like repeatType: 'reverse'
      });
    

  }

 

  ngOnInit(): void {
  this.profileForm = this.formBuilder.group(
    {
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    }
  )
  fetch(environment.VITE_SERVICE_ID),
  fetch( environment.VITE_TEMPLATE_ID),
  fetch(environment.VITE_PUBLIC_KEY)

  }

  get firstName() {
    return this.profileForm.get('firstName');
  }

  get email() {
    return this.profileForm.get('email');
  }

  get message() {
    return this.profileForm.get('message');
  }

  submitted = false;
  public sendEmail(e: Event) {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    e.preventDefault();

    emailjs
      .sendForm( environment.VITE_SERVICE_ID, environment.VITE_TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: environment.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

}
