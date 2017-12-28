import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntergrationsComponent } from './intergrations.component';

describe('IntergrationsComponent', () => {
  let component: IntergrationsComponent;
  let fixture: ComponentFixture<IntergrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntergrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntergrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
