import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Utils from '../utils';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    Utils.init();
  }

  goRegistry() {
    this.router.navigate(['/registry_agentid']);
  }

}
