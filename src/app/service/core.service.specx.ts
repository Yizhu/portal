import { TestBed, inject } from '@angular/core/testing';
import { CoreService } from './core.service';
import { mockConfig } from './helpers.spec';

describe('CoreService', () => {
  const httpSpy = jasmine.createSpyObj('http', ['get']);
  let service: CoreService;

  beforeEach(() => {
    service = new CoreService(httpSpy);
  });

  describe('getConfig', () => {

    it('should return config', (done) => {
      let mockHackers
      const mockResponse = {
        toPromise: () => {
          return Promise.resolve({ json: () => mockConfig });
        }
      };

      httpSpy.get.and.returnValue(mockResponse);

      service.getConfig()
        .then(data => {
          expect(data).toEqual(mockConfig);
          done();
        });
    });
  });

});
