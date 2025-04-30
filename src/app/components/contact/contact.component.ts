import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
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
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit,AfterViewInit {

  @ViewChildren('formItemRef', { read: ElementRef }) formItems!: QueryList<ElementRef>;

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
