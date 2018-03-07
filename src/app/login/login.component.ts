import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.utilsService.init();
  }

  

}
