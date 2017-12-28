import { Component, OnInit } from '@angular/core';
import Utils from '../utils';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
