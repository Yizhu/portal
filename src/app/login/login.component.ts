import { Component, OnInit, ViewChild } from '@angular/core';
import Utils from '../utils';
import { SnackbarComponent } from '../shared/snackbar/snackbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild(SnackbarComponent)
  private snackbarComponent: SnackbarComponent;

  constructor() { }

  msg: string;

  ngOnInit() {
    Utils.init();
  }

  myFunction() {
    this.msg = "Password incorrect! Please try again.";
    this.snackbarComponent.showBar();
  }


}
