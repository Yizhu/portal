import { Component, OnInit } from '@angular/core';
import Utils from '../utils';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
