import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IndexComponent } from './index.component';
import { TranslatePipe } from '@ngx-translate/core'
import { TranslateService } from '@ngx-translate/core';
import { UtilsService } from '../service/utils.service';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let api: UtilsService;

  const mockApiService = {
    init: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndexComponent, TranslatePipe],
      providers: [
        { provide: UtilsService, useValue: mockApiService },
        { provide: TranslateService },
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
