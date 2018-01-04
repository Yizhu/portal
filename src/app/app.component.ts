import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  configFile: string = '/assets/config.json?nocache=' + (new Date()).getTime();

  constructor(private http: Http) {
      this.http.get(this.configFile)
      .toPromise()
      .then(response => {
        let langSet = response.json().language;
        if (localStorage.getItem('lang') === null) {       
          localStorage.setItem('lang', langSet[0].value);         
        }      
      });  
  }
}
