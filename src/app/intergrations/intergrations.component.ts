import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
@Component({
  selector: 'app-intergrations',
  templateUrl: './intergrations.component.html',
  styleUrls: ['./intergrations.component.css']
})
export class IntergrationsComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.init();
  }

}
