import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenegrapghComponent } from './scenegrapgh.component';

describe('ScenegrapghComponent', () => {
  let component: ScenegrapghComponent;
  let fixture: ComponentFixture<ScenegrapghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenegrapghComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenegrapghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
