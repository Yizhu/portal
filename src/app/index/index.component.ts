import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';
import { CoreService } from '../service/core.service';
import { LoopBackConfig } from '../service/sdk/lb.config';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  username: string;
  constructor(
    private utilsService: UtilsService,
    private coreService: CoreService
  ) {
    this.coreService.getConfig()
    .then(response => {
      let langSet = response.language;
      if (localStorage.getItem('lang') == null) {
        localStorage.setItem('lang', langSet[0].value);
      }
      LoopBackConfig.setBaseURL(response.api.loopBackURL);
      LoopBackConfig.setApiVersion(response.api.loopBackApiVersion);
      localStorage.setItem('loopBackURL', response.api.loopBackURL);
      localStorage.setItem('loopBackApiVersion', response.api.loopBackApiVersion);
    });
  }

  ngOnInit() {
    this.utilsService.init();
    this.username = localStorage.getItem('$UserInfo$username');
  }

}
