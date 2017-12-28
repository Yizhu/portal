import { Component, OnInit } from '@angular/core';
import Utils from '../utils';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
