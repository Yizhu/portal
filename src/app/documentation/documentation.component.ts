import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.init();
  }

}
