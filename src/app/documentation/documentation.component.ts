import { Component, OnInit } from '@angular/core';
import Utils from '../utils';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
