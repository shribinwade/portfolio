import { Component } from '@angular/core';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from './components/services/services.component';


@Component({
    selector: 'app-root',
    imports: [ServicesComponent, PortfolioComponent, ContactComponent, HeroComponent, ServicesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio19';
}
