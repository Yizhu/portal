import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.init();
  }

}
