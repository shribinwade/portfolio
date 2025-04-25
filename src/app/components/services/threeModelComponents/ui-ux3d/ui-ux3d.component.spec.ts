import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiUx3dComponent } from './ui-ux3d.component';

describe('UiUx3dComponent', () => {
  let component: UiUx3dComponent;
  let fixture: ComponentFixture<UiUx3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiUx3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiUx3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
