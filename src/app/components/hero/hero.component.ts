import { Component, OnInit } from "@angular/core";
import { BubbleComponent } from "./bubble/bubble.component";
import { BubbleshapeComponent } from "./bubbleshape/bubbleshape.component";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  stagger,
  query
} from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BubbleComponent, BubbleshapeComponent],
  animations: [

    // Simple fade in with upward movement
    trigger('FadeInAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('1s', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    // Animate all child elements with staggered appearance
    trigger('AwardsInAnimation', [
      transition(':enter', [
        query(
          '*',
          [
            style({ opacity: 0, transform: 'translateX(-20px)' }),
            stagger(200, animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })))
          ],
          { optional: true } // Prevent errors when there are no child elements
        )
      ])
    ]),

    // Animate all direct child elements except those with class 'FollowText'
    trigger('FollowInAnimation', [
      transition(':enter', [
        query(
          '* > *:not(.FollowText)',
          [
            style({ opacity: 0, transform: 'translateY(-50px)' }),
            stagger(300, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ]),

    // Animate a scroll button with looping fade in/out and vertical movement
    trigger('ScrollButtonInAnimation', [
      transition(':enter, * => *', [
        animate(
          '3s ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-20px)' }),
            style({ opacity: 1, transform: 'translateY(0)' }),
            style({ opacity: 0, transform: 'translateY(-10px)' })
          ])
        )
      ])
    ]),

    // Contact circle animation with rotation and opacity change
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
      ])
    ])
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {

  // Used to toggle visibility for re-triggering animation
  isVisible = true;

  // Used to control contact circle animation state
  isRotate = 'void';

  ngOnInit() {
    this.rotate();

    // Toggle `isVisible` to restart animation. This approach can be optimized using Angular's animation callbacks or RxJS.
    setInterval(() => {
      this.isVisible = false;
      setTimeout(() => this.isVisible = true, 10);
    }, 3000);
  }

  rotate() {
    // Trigger rotation animation on init
    setTimeout(() => {
      this.isRotate = 'visible';
    }, 0);
  }

  downloadResume(){
    const link = document.createElement('a');
    link.href = 'Resume.pdf';
    link.download = 'Shrihari_Binwade_FullStack_Developer.pdf';
    link.click();
  }
}
