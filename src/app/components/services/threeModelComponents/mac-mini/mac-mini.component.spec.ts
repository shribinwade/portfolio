import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacMiniComponent } from './mac-mini.component';

describe('MacMiniComponent', () => {
  let component: MacMiniComponent;
  let fixture: ComponentFixture<MacMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacMiniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
