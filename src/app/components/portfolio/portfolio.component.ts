import { Component } from '@angular/core';
import { ChildListComponentComponent } from "./child-list-component/child-list-component.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ChildListComponentComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {

 protected items = [
    { 
      id: 1,
      img: 'portfolioImg.png',
      title: "test",
      dec:"test",
      link:'/'
    },
    { 
      id: 2,
      img: 'api.svg',
      title: "test",
      dec:"test",
      link:'/'
    },
    { 
      id: 3,
      img: 'api.svg',
      title: "test",
      dec:"test",
      link:'/'
    },
    { 
      id: 4,
      img: 'api.svg',
      title: "test",
      dec:"test",
      link:'/'
    },
  ]

}
