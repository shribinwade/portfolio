import { Component, OnInit } from '@angular/core';
import {FormControl,  FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {



  profileForm:FormGroup = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder){

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
