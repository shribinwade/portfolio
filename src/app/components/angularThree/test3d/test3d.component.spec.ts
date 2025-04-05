import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3dComponent } from './test3d.component';

describe('Test3dComponent', () => {
  let component: Test3dComponent;
  let fixture: ComponentFixture<Test3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test3dComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
