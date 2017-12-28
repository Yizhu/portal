import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryAgentidComponent } from './registry-agentid.component';

describe('RegistryAgentidComponent', () => {
  let component: RegistryAgentidComponent;
  let fixture: ComponentFixture<RegistryAgentidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryAgentidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryAgentidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
