import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CoreService {
  configFile: string = '/assets/config.json?nocache=' + (new Date()).getTime();
  constructor(private http: Http) { }
  getConfig() {
    return this.http.get(this.configFile)
      .toPromise()
      .then((res: Response) => res.json());
  }
}
