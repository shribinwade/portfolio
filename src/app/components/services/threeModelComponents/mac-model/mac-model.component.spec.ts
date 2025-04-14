import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacModelComponent } from './mac-model.component';

describe('MacModelComponent', () => {
  let component: MacModelComponent;
  let fixture: ComponentFixture<MacModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
