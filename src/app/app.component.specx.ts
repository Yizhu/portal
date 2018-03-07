import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreService } from './service/core.service';
import { mockConfig } from './service/helpers.spec';
describe('AppComponent', () => {
  const mockApiService = {
    getConfig: () => Promise.resolve(mockConfig)
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: CoreService, useValue: mockApiService },
      ]
    }).compileComponents();

  }));

  beforeEach(() => {
    var store = {};
    spyOn(localStorage, 'getItem').and.callFake((key: string): String => {
      return store[key] || null;
    });
    spyOn(localStorage, 'setItem').and.callFake((key: string, value: string): String => {
      store[key] = <string>value;
      return store[key];
    });
  })

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('getConfig', (done) => {
    mockApiService.getConfig()
      .then(data => {
        // expect(data).toEqual(mockConfig);
        expect(localStorage.getItem('lang')).toBe(null);
        localStorage.setItem('lang', 'zh');
        expect(localStorage.getItem('lang')).toBe('zh');
      });
    done();
  });

});
