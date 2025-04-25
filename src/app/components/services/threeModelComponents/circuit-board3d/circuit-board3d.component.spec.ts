import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBoard3dComponent } from './circuit-board3d.component';

describe('CircuitBoard3dComponent', () => {
  let component: CircuitBoard3dComponent;
  let fixture: ComponentFixture<CircuitBoard3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircuitBoard3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitBoard3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
