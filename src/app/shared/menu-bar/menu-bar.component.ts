import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Utils from '../../utils';
@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})

export class MenuBarComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
    let lang;
    if(!localStorage.getItem('lang')){
      lang = "zh";
    }else{
      lang = localStorage.getItem('lang');
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  @Input()
  logoType: string;

  @Input()
  user: string;

  currentPath: string;
  selectedLan: string;
  languages = [{
    "name": "中文",
    "value": "zh"
  }, {
    "name": "English",
    "value": "en"
  }
  ];
  ngOnInit() {
    this.currentPath = this.route.routeConfig.path;
    let lang;
    if(!localStorage.getItem('lang')){
      lang = "zh";
    }else{
      lang = localStorage.getItem('lang');
    }
    this.selectedLan = lang;
  }

  changeLang(event) {
    let langKey = this.selectedLan;
    this.translate.use(langKey);
    localStorage.setItem('lang', langKey);
    // setTimeout(Utils.offcanvasMenu, 1000);
  }

}
