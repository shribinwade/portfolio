import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSVGComponent } from './contact-svg.component';

describe('ContactSVGComponent', () => {
  let component: ContactSVGComponent;
  let fixture: ComponentFixture<ContactSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSVGComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
