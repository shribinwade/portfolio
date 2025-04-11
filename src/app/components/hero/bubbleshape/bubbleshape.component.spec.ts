import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleshapeComponent } from './bubbleshape.component';

describe('BubbleshapeComponent', () => {
  let component: BubbleshapeComponent;
  let fixture: ComponentFixture<BubbleshapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleshapeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleshapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
