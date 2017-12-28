import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  @Input()
  logoType: string;

  @Input()
  user: string;

  currentPath: string;

  ngOnInit() {
    this.currentPath = this.route.routeConfig.path;
  }

}
