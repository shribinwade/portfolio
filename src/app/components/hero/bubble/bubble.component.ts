

import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { TypewriterService } from '../../../services/services/typewriter.service';



@Component({
  selector: 'app-bubble',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './bubble.component.html',
  styleUrl: './bubble.component.css',
  animations: [
    trigger('typingAnimation', [
      transition(':enter', [
        animate(
          '2s steps(20, end)', // Adjust speed and steps as needed
          keyframes([
            style({ width: '0', overflow: 'hidden' }),
            style({ width: '*' })
          ])
        )
      ])
    ]),
    trigger('fadeInAnimation', [
      transition(':enter', [ // Trigger animation when the element enters
        style({ opacity: 0 }), // Start with opacity 0
        animate('2s ease-out', style({ opacity: 1 })) // Animate to full opacity
      ])
    ])
  
  ],
})
export class BubbleComponent {
  titles = ['Hi..!', 'How are you?', 'What are you up to?'];
  private typewriterService = inject(TypewriterService);

   typedText$ = this.typewriterService
    .getTypewriterEffect(this.titles)
    .pipe(map((text) => text));

}
