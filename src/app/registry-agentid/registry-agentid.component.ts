import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-registry-agentid',
  templateUrl: './registry-agentid.component.html',
  styleUrls: ['./registry-agentid.component.css']
})
export class RegistryAgentidComponent implements OnInit {

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.init();
  }

}
