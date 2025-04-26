import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildListComponentComponent } from './child-list-component.component';

describe('ChildListComponentComponent', () => {
  let component: ChildListComponentComponent;
  let fixture: ComponentFixture<ChildListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
