
import { Component } from "@angular/core";
import { BubbleComponent } from "./bubble/bubble.component";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query,
  AnimationOptions,
  // ...
} from '@angular/animations';
import { SceneGraph } from "../angularThree/scenegrapgh/scenegrapgh.component";
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BubbleComponent,SceneGraph],
  animations: [
    trigger('FadeInAnimation', [
      transition(':enter', [
        style({
              opacity: 0, 
              transform: 'translateY(-100px)' 
        }),
        animate(
          '1s', // Adjust speed and steps as needed
          style({ 
            opacity: 1, 
            transform: 'translateY(0)' 
          })
        )
      ])
    ]), 

    trigger('AwardsInAnimation', [
      transition(':enter', [

            // Staggered animation for child elements
       query(
      '*', // Selects all child elements
      [
        style({ opacity: 0, transform: 'translateX(-20px)' }), // Initial state of children
        stagger(200, animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
      ],
      { optional: true } // Prevent errors if no child elements exist
    )
      ])
    ]), 

    trigger('FollowInAnimation', [
      transition(':enter', [ // Staggered animation for child elements
       query(
      '* > *:not(.FollowText)' , // Selects all child elements
      [
        style({ opacity: 0, transform: 'translateY(-50px)' }), // Initial state of children
        stagger(300, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
      ],
      { optional: true } // Prevent errors if no child elements exist
    )
      ])
    ]),


    trigger('ScrollButtonInAnimation', [
      transition(':enter,* => *', [   
        animate(
          '3s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-20px)' }),  // Start (hidden, slightly above)
            style({ opacity: 1, transform: 'translateY(0)' }),    // Middle (visible, normal position)
            style({ opacity: 0, transform: 'translateY(-10px)'})    // End (hidden, slightly below)
          ])
        )
 
      ])
    ]), 

    trigger('ContactCircalInAnimation', [
      state('void', style({
        transform: 'translateY(-20%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),

      transition('void => visible', [
        animate('3s linear', keyframes([
          style({ offset: 0, transform: 'translateX(20%) rotate(0deg)', opacity: 0 }),
          style({ offset: 0.5, transform: 'translateX(0) rotate(180deg)', opacity: 0.5 }),
          style({ offset: 1, transform: 'translateX(0) rotate(360deg)', opacity: 1 })
        ]))
      ]),


    ])

    
 
  ]
    ,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  isVisible = true;
  isRotate = 'void';

  ngOnInit() {
    this.rotate();
    setInterval(() => {
      this.isVisible = false;
      setTimeout(() => this.isVisible = true, 10); // Reset animation
    }, 3000); // Restart every 2 seconds

    
  }

  rotate(){
      setTimeout(() => {
        this.isRotate = 'visible';
      },0);
  }
}
