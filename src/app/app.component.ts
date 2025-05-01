import { Component, OnInit } from '@angular/core';
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from './components/services/services.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
    selector: 'app-root',
    standalone:true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      NgComponentOutlet, CommonModule // 👈 Required for *ngComponentOutlet to work
    ],
})
export class AppComponent implements OnInit {

  title = 'portfolio19';

  
  loadHero = true;
  loadServices = false;
  loadPortfolio = false;
  loadContact = false;

  heroComponent = HeroComponent;
  servicesComponent = ServicesComponent;
  portfolioComponent = PortfolioComponent;
  contactComponent = ContactComponent;

  ngOnInit(): void {
    this.setupScrollTriggers();
  }
  setupScrollTriggers() {
    const sections = [
      { id: 'heroSection', load: () => (this.loadHero = true) },
      { id: 'servicesSection', load: () => (this.loadServices = true) },
      { id: 'portfolioSection', load: () => (this.loadPortfolio = true) },
      { id: 'contactSection', load: () => (this.loadContact = true) },
    ];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: 'top center',
        once: true,
        onEnter: section.load,
      });
    });
  }
}
