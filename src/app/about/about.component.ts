import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.init();
  }

}
