import { Component, OnInit, ViewChild } from '@angular/core';
import { UserApi } from '../../service/sdk/services/custom/User';
import * as CryptoJS from 'crypto-js';
import { SnackbarComponent } from '../../shared/snackbar/snackbar.component';
import { LoopBackConfig } from '../../service/sdk/lb.config';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string;
  password: string;
  msg: string;

  @ViewChild(SnackbarComponent)
  private snackbarComponent: SnackbarComponent;

  constructor(
    private userService: UserApi,
    private translate: TranslateService) { }

  ngOnInit() {
    LoopBackConfig.setBaseURL(localStorage.getItem("loopBackURL"));
  }

  login() {
    if (!this.username || !this.password) {
      return;
    }
    let key = CryptoJS.enc.Base64.parse('2b7e151628aed2a6abf7158809cf4f3c');
    let iv = CryptoJS.enc.Base64.parse('3ad77bb40d7a3660a89ecaf32466ef97');
    let encrypted = CryptoJS.AES.encrypt(this.password, key, { iv: iv });
    let ciphertext = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    let credentials = { "username": this.username, "password": ciphertext };
    this.userService.login(credentials)
      .toPromise()
      .then(result => {
        let displayName = result.user.email.split("@")[0] + "/" + result.user.Site_ID + "/Wistron";
        localStorage.setItem('$UserInfo$username', displayName);
        window.location.href = "/index";
      })
      .catch(err => {
        if (!!err.details.errorCode) {
          this.translate.get(err.details.errorCode).subscribe((val: string) => {
            this.msg = val;
            this.snackbarComponent.showBar();
          });
        }
      });
  }
}
