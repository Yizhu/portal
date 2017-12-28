import { Component, OnInit } from '@angular/core';
import Utils from '../utils';
@Component({
  selector: 'app-intergrations',
  templateUrl: './intergrations.component.html',
  styleUrls: ['./intergrations.component.css']
})
export class IntergrationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
